import 'dotenv/config';
import express, { Express, NextFunction, Request, Response } from "express";

import session from 'express-session'
import passport from 'passport';

import { authRoutes } from './routes/auth';
import organizersRoutes from './routes/organizer';
import { eventRoutes } from './routes/event';
import { userRoutes } from './routes/user';

import './db/connection'

import './auth/passport';
// const passportLocalStrategy = require('./auth/passport');
// passportLocalStrategy(passport);

const app: Express = express();

app.use(express.json());
app.use(session({
    secret: 'Event',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true },
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', organizersRoutes);
app.use('/api', eventRoutes)
app.use('/api', userRoutes)
app.use('/api', authRoutes)


app.use(( err: unknown, req: Request, res: Response, next: NextFunction ) => {
    console.log(err);
    let errMsg = 'An unknown error occured';
    if (err instanceof Error) errMsg = err.message;
    res.status(500).json({err: errMsg})

})


app.listen(8000, () => console.log('Event server started'));