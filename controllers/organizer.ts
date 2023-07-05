import { RequestHandler } from "express";
import mongoose from "mongoose";

import Event from "../models/event";
import User from "../models/user";
import { userType } from '../models/user';
import CheckIn from '../models/scanner'


export const createEvent: RequestHandler = async (req, res, next) => {
    try {
        // @ignore
        const my_details: any = req.user;
        const eventDetails = req.body;

        if (my_details.userType === userType.user) {
            return res.status(403).json({ data: { msg: 'Not authorized to access this' } })
        }

        const exists = await Event.findOne({ title: eventDetails.title });
        if (!exists) {
            // eventDetails._id = mongoose.Types.ObjectId(my_details._id)
            // eventDetails.userID = my_details._id
            console.log(eventDetails.ticketType)
            const newTickets = new Map()
            for (const key in eventDetails.ticketType) {
                if (key !== 'speaker' && key !== 'guest' && key !== 'organizer') {
                    newTickets.set(key, eventDetails.ticketType[key])
                }

            }
            // const tes = 
            const eventObj = {
                creatorID: my_details._id,
                ...eventDetails,
                // list: new Map<string, any>(),
                ticketType: {
                    ...eventDetails.ticketType,
                    dynamicTicket: newTickets
                }
            }
            console.log(eventObj)
            Event.create(eventObj)
                .then(created => (res.status(200).json({ data: { msg: 'Event created!!!', events: created } })))
                .catch(err => (res.status(400).json({ data: { msg: 'Event creation  failed!!!', err } })))
            return;
        }
        return res.status(400).json({ data: { msg: 'Event with the title already exists!!!' } })
    } catch (err: any) {
        res.status(500).json({ data: { msg: 'Server error', error: err.message, status: err.status } });
    }
};

export const getCreatedEvents: RequestHandler = async (req, res, next) => {
    try {
        const my_details: any = req.user;

        if (my_details.userType === userType.user) {
            // throw new Error('You don\'t have access to this');
            return res.status(403).json({ data: { msg: 'Not authorized to access this' } })
        }
        // const events = await Event.fin
        let condition = { creatorID: new mongoose.Types.ObjectId(my_details._id) };

        const events = await Event.find(condition)
        if (events) {
            const count = await Event.countDocuments(condition);
            res.status(200).json({ data: { events, count } })
        } else {
            res.status(400).json({ msg: 'No event created, proceed to create one' })
        }

        console.log(events)


    } catch (err: any) {
        res.status(500).json({ data: { msg: 'Server error', error: err.message, status: err.status } });
    }
};

export const editEvent: RequestHandler = async (req, res) => {
    try {
        const my_details: any = req.user;
        if (my_details.userType === userType.user) {
            return res.status(403).json({ data: { msg: 'Not authorized to access this' } })
        }
        const { id } = req.params;

        const condition = { creatorID: my_details._id, _id: id };
        let options = { lean: true, new: true }

        const update = { ...req.body }
        console.log(update)

        const updated = await Event.findOneAndUpdate(condition, update, options);
        if (updated) return res.status(200).json({ data: { msg: 'Event updated', event: updated } });
        return res.status(400).json({ data: { msg: 'Updated failed' } })
    } catch (err: any) {
        res.status(500).json({ data: { msg: 'Server error', error: err.message } });
    }
}

export const createCheckIn: RequestHandler = async (req, res) => {
    try {
        const my_details: any = req.user;
        if (my_details.userType === userType.user) {
            return res.status(403).json({ data: { msg: 'Not authorized to access this' } })
        }

        const { id } = req.params;
        const { name, qualifiedTickets } = req.body;
        await CheckIn.findOneAndRemove({ name })
        const exists = await CheckIn.findOne({ name });
        if (exists) return res.status(400).json({ data: { msg: 'CheckIn already exists' } });

        let event = await Event.findOne({_id: id, creatorID: my_details._id});
        if (!event) return res.status(400).json({ data: { msg: 'Event not found or you don\'t have access to this event' } })
        const checkInObj = {
            ...req.body,
            eventID: event._id
        }
        const scanner = await new CheckIn(checkInObj).save();
        if (!scanner) return res.status(400).json({ data: { msg: 'Error creating checkIn' } });
        return res.status(201).json({ data: { msg: 'CheckIn created', scanner } })

    } catch (err: any) {
        res.status(500).json({ data: { msg: 'Server error', error: err.message, status: err.status } });
    }
};

export const scan: RequestHandler = async (req, res) => {
    try {
        const my_details: any = req.user;
        if (my_details.userType === userType.user) {
            return res.status(403).json({ data: { msg: 'Not authorized to access this' } })
        }

        const { eventID, scannerID } = req.params;
        const { scannerName, userID, email } = req.body;
        
        const scanner = await CheckIn.findOne({ eventID, _id: scannerID });
        if (!scanner) return res.status(404).json({ data: { msg: 'This event does not have a scanner that matches with the checkIn name yet' } })

        const event: any = await Event.findOne({_id: eventID, creatorID: my_details._id});
        if (!event) return res.status(404).json({ data: { msg: 'Event not found or you don\'t have access to this event' } })
        const user: any = event.registered.find((usr: any) => {
            if (userID && usr.userID) {
                return usr.userID.toString() == userID;
            } else {
                return usr.email === email
            }
        })
        if (!user) return res.status(404).json({ data: { msg: 'Registration not found' } })
        
        const fi = scanner.qualifiedTickets.find((f) => (f == user.ticket))
        console.log(fi, 'ticket')

        if(scanner.qualifiedTickets.includes(user.ticket)) {
            // const checkedBefore = isDuplicate(event, userID, email);
            const checkedBefore = event.list[scannerName].some((item: any) => item.email === email);
            console.log(checkedBefore)
            if (checkedBefore) return res.status(400).json({ data: { msg: `Already checkedIn/marked before` } });
            event.list[scannerName].push(req.body)
            const check = await event.save();
            if(!check) return res.status(400).json({ data: { msg: `Erroor adding to ${scannerName}'s list` } });
            return res.status(200).json({ data: { msg: 'Checked successfull', list: check.list[scannerName] } })
        }
        return res.status(400).json({ data: { msg: `Bearers category not previledge to this` } })
        
        function isDuplicate(event: any, userID?: string, email?: string) {

            event.list[scannerName].some((item: any) => item.email === email);
            return;
            
            // if(userID) return event.list[scannerName].some((obj: any) => {
            //     console.log(obj.userID)
            //     return obj.e === userID
            // });
            // console.log({email: email})
            // return event.list[scannerName].some((obj: any) => obj.email === email);
        }
    } catch (err: any) {
        res.status(500).json({ data: { msg: 'Server error', error: err.message, status: err.status } });
    }
};
export const generateList: RequestHandler = async (req, res) => {
    const {id} = req.params;
    const {name} : any= req.query;
    
    Event.findById(id).populate({path: 'userID', select: 'email', model: "User"}).exec()
    .then((event: any) => (res.status(200).json({table: event.list[name]})))
    .catch(e => (res.json({e: e.message})))
}


export const deleteEvent: RequestHandler = async (req, res) => {
    try {
        const my_details: any = req.user;
        if (my_details.userType === userType.user) {
            return res.status(403).json({ data: { msg: 'Not authorized to access this' } })
        }
        const { id } = req.params;

        const condition = { creatorID: my_details._id, _id: id };

        const deleted = await Event.findOneAndDelete(condition);
        if (deleted) return res.status(200).json({ data: { msg: 'Event deleted' } });
        return res.status(400).json({ data: { msg: 'Deletion failed' } });
    } catch (err: any) {
        res.status(500).json({ data: { msg: 'Server error', error: err.message } });
    }
}