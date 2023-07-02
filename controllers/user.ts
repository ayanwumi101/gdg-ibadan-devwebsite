import { RequestHandler } from "express";
import Event from "../models/event";


export const getRegisteredEvents: RequestHandler = async (req, res, next) => {
    try {
        const myDetails: any = req.user!;

        Event.find({'registered.userID': myDetails.id})
        .then(events => (res.status(200).json({data: { msg: 'Registered events', events }})))
        .catch(err => (res.status(400).json({msg: 'You r yet to register for an event', err})))
        
    } catch (err) {
        throw err;
    }
};