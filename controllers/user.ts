import { RequestHandler } from "express";
import Event from "../models/event";
import User from "../models/user";


export const getRegisteredEvents: RequestHandler = async (req, res, next) => {
    try {
        const myDetails: any = req.user;

        Event.find().where('registered').elemMatch({ userID: myDetails._id })
        .then(events => (res.status(200).json({data: { msg: 'Registered events', events }})))
        .catch(err => (res.status(400).json({msg: 'You r yet to register for an event', err})))
        
    } catch (err: any) {
        res.status(500).json({ data: { msg: 'Server error', error: err.message } });
    }
};

export const getProfile: RequestHandler = async (req, res) => {
    try {
        const my_details: any = req.user!;

        const details = await User.findById(my_details._id);
        if(details) return res.status(200).json({data: { msg: 'Registered events', profile: details }})
        return res.status(400).json({data: { msg: 'Error loading profile' }})
    } catch (err: any) {
        res.status(500).json({ data: { msg: 'Server error', error: err.message } });
    }
}