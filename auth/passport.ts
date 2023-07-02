import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import User from '../models/user';
import factory from '../config/factory';

passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email: string, password: string, done: Function) => {
            try {
                let condition = { email };
                let projections = {};
                let option = { lean: true };

                let user = await User.findOne( condition, projections, option );

                if(user) {
                    // if (!user.status === 'pending') {
                    //     return done( null, false, {msg: 'Your account is still pending, check back later.Thanks'})
                    // }
                    let correlates = factory.compareHashedPassword(password, user.password);
                    if(correlates) {
                        return done(null, user);
                    }
                    return done(null, false, {msg: 'Incorrect password!!'});
                }
                return done(null, false, {msg: 'Your account does\'nt exist'});
            } catch (err: any) {
                return done(null, false, {msg: 'Server error!!'});
            }
        }
    )
);

passport.serializeUser((user: any, done) => {
    done(null, user._id.toString());
});

interface jwtPayload {
    id: string
    role: string
}

passport.use(
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'process.env.JWT_SECRET',

        },
        async (jwtPayload: jwtPayload, done: Function) => {
            // let query = { _id: mongoose.Types.ObjectId(jwtPayload.userId) };
            let query = { _id: jwtPayload.id };

            let projections = { password: 0, createdDate: 0, createdAt: 0, updatedAt: 0 };
            let options = { lean: true };

            let user = await User.findOne(
                query,
                projections,
                options
            );
            // if (user && user.userType === jwtPayload.role) {
            if (user) {
                // req.user = user
                return done(null, user);
            } else {
                return done(null);
            }
        }
    )
);