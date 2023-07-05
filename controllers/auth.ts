import 'dotenv/config'
import { RequestHandler, Request, Response, NextFunction } from "express";
import qr from 'qrcode';
import passport from "passport";
import jwt from "jsonwebtoken";
import sgMail from '@sendgrid/mail';
import factory from '../config/factory';


import User from '../models/user';
// import { userType } from "../models/user";


const createToken = (userData: any): string => {
    let key = 'process.env.JWT_SECRET';
    let userObj = {
        // firstName: userData.firstName,
		// lastName: userData.lastName,
        // email: userData.email,
        id: userData._id,
        role: userData.userType,
        verified: userData.verified
    }

    const token = jwt.sign(userObj, key, { expiresIn: '1d'});
    return token;
}

const otpMap = new Map();

export const signup: RequestHandler = async (req ,res) => {
    try {
        const {_id, firstName, lastName, email, phoneNumber, password, userType} = req.body;

        const exists = await User.findOne({email});
        if(!exists) {
            let userObj;
            const dataOBJ = {
                userID: _id,
                firstName,
                lastName,
                email,
                phoneNumber,
                role: userType
            }
            // const qrData = createToken(req.body);
            const qrData = JSON.stringify(dataOBJ);
            const code = await qr.toDataURL(qrData);
            userObj = {...req.body, password: factory.generateHashPassword(password), code};

            const resetLink = `http://localhost:3000/api/verify-email?email=${email}`;   
            const msg = {
                to: email,
                from: process.env.SENDER!,
                subject: 'Verify Email',
                text: `Hello ${firstName},\n\nYou have requested a password reset for your account. To reset your password, please click the following link:\n\n${resetLink}\n\nThis link will expire in 1 hour.\n\nIf you did not request this password reset, please ignore this email.\n\nThanks,\nThe Example Team`,
            };
            await sgMail.send(msg);
            // (await User.create(req.body)).save()
            new User(userObj).save()
            .then(user => (res.status(201).json({ data: { msg: 'Signup successfully!', user } })))
            .catch(err => (res.status(400).json({ data: { msg: 'Opps!', err } })));
            return;
        }
        return res.status(400).json({ data: { msg: 'Account already exists'} })
    } catch (err: any) {
        return res.status(500).json({ data: { msg: 'Server error', error: err.message } });
    }
};

export const verifyMail: RequestHandler = async (req, res) => {
    try {
        const {email} = req.query;

        const update = await User.findOneAndUpdate({email}, {verified: true})
        if(update) return res.status(200).json({ data: { msg: 'Verified' } });
        return res.status(400).json({ data: { msg: 'Error verifying' } });
        
    } catch (err: any) {
        res.status(500).json({ data: { msg: 'Server error', error: err.message } });
    }
}

export const signin = (req: Request, res: Response, next: NextFunction) => {
    try {
        passport.authenticate('local', (err: any, user: any, info: any) => {
            // if (err) return next(err);
            if (err) throw err;
    
            if (!user) {
                console.log(user + '1')
                console.log(info)
                
                // res.send("User doesn't exist")
                return res.status(400).json({ msg: info.msg });
            }
            const OTP = Math.floor(100000 + Math.random() * 900000);
            otpMap.set(user.email, OTP);
            console.log(OTP);
            console.log(otpMap)
            const msg = {
                to: user.email,
                from: process.env.SENDER!,
                subject: 'Your OTP for login',
                text: `Your OTP is: ${OTP}`,
            };
            sgMail.send(msg)
            .then(() => {
                console.log(`OTP sent to ${user.email}`);
                return next(user);
            })
            .catch(err => {
                console.error(`Error sending OTP to ${user.email}`, err);
                return next(err);
            });

            let token = createToken(user);
            return res.status(200).json({ msg: 'check your mail or phone for an OTP sent', token })
        })(req,res,next)
    } catch (err: any) {
        return res.status(500).json({ data: { msg: 'Server error', error: err.message } });
    }
};

export const verify = (req: Request, res: Response, next: NextFunction) => {
    try {
        const {email} = req.query;
        const {otp} = req.body;

        if (!email) return res.status(401).json({ msg: 'email not valid' });

            console.log(otpMap);
            const storedOTP = otpMap.get(email);

            // Check if the OTP is valid
            if (!storedOTP) {
                req.logout(err => {
                    return res.status(400).json({ message: 'Failed! OTP not found for this user or has been used once' });
                });
                return;
            }

            if (+otp !== storedOTP) {
                req.logout((err) => {
                    if (err) return res.status(400).json({ message: err });
                    return res.status(400).json({ message: 'Invalid OTP' });
                });
                return;
            }
            otpMap.delete(email);

            User.findOne({ email })
            .then((user: Express.User | null) => {
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                };
                req.login(user, err => {
                    if (err) {
                        return res.status(500).json({ message: err.message });
                    }
                    const newToken = createToken(user);
                    return res.json({ message: 'Login successful', newToken });
                });
            })
            .catch(e => res.status(400).json({ message: e }))
    } catch (err: any) {
        return res.status(500).json({ data: { msg: 'Server error', error: err.message } });
    }
}