import {  RequestHandler, Request, Response, NextFunction } from "express";
import qr from 'qrcode';

import Event from '../models/event';
import { EvenT } from "../models/event";

export const getAllEvents: RequestHandler = async (req, res, next) => {
    try {
        Event.find()
        .then(events => {
            if(events) return res.status(200).json({ data: { msg: 'Events loaded', events } })
            return res.status(200).json({ data: { msg: 'Noo Event yet' } })
        })
        .catch(err => (res.status(400).json({ data: { msg: 'Oops!', err } })))
        return;
        
    } catch (err: any) {
        res.status(500).json({ data: { msg: 'Server error', error: err.message, status: err.status } });
    }
};

export const viewEvent: RequestHandler = (req, res) => {
    try {
        const { id } = req.params;
        Event.findById(id)
        .then(event => (res.status(200).json({ data: { event } })))
        .catch(err => (res.status(404).json({ data: { msg: 'Not found', err } })))
    } catch (err: any) {
        res.status(500).json({ data: { msg: 'Server error', error: err.message, status: err.status } });
    }
}

export const register4Event: RequestHandler = async (req, res) => {
    try {
        const my_details: any = req.user;
        const { id } = req.params;
        const { email } = req.body;
console.log(my_details, 1)
        const event = await Event.findById(id)
        if(!event) return res.status(404).json({ message: 'Event not found' });
        const exists = event.registered.some((obj: any) => {
            if(my_details && obj.userID) {
                return obj.userID.toString() === my_details._id.toString();
            } else {
                return obj.email === email;
            }
        });
        console.log(exists, 2);
        if(exists) return res.status(400).json({ data: { msg: 'You have registered for the selected event before, proceed to make payment if you have not done so' } })
        const dyn = new Map([]);
        event.registrationData.forEach(dynData => dyn.set(dynData, req.body[dynData]));
        // let ticket;
        // for(const key in event.ticketType) {
        //     if(key === ticket) {
        //         ticket = key;
        //         break;
        //     }
        //     continue;
        // }
        let addRegistration;
        if(my_details !== undefined) {
            addRegistration = {
                $push: {
                    registered: {
                        userID: my_details._id,
                        ...req.body,
                        dynamicData: dyn,
                    }
                }
            };
        } else {
            const qrData = JSON.stringify(req.body);
            const code = await qr.toDataURL(qrData);
            addRegistration = {
                $push: {
                    registered: {
                        ...req.body,
                        dynamicData: dyn,
                        code
                    }
                }
            };
        }
        
        const registration = await Event.findOneAndUpdate({_id: id}, addRegistration, {new: true, lean: true})
        if(registration) return res.status(200).json({ data: { msg: 'Event registeration sucessfully, procedd to pay' } })
        return res.status(400).json({ data: { msg: 'Registration failed' } });

        // async function checkIfEver() {

        // }
    } catch (err: any) {
        // throw err
        res.status(500).json({ data: { msg: 'Server error', error: err.message } });
    }
}