import { RequestHandler } from "express";
import mongoose from "mongoose";

import Event from "../models/event";
import User from "../models/user";
import { userType } from '../models/user';
import Scanner from '../models/scanner'


export const checkInToEvent: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const qrDetails = req.body;


        // check if user registered for the selected event

        const user = await User.findOne({ email: qrDetails.email });

        const filter = {
            filteredField: {
                $filter: {
                    input: '$registered', // The array property you want to filter
                    as: 'item',
                    cond: { $eq: ['$$item.userID', user?._id] } // The condition for filtering
                }
            }
        };

        // Event.findOne({ _id: id, 'registered.userID': user?._id }, { 'registered.$': 1 })
        // Event.findOne({ registered: { $elemMatch: { userID: user?._id } } }, filter);
        Event.findById(id).where('registered').elemMatch({ userID: user?._id }, filter)
            .then(event => {
                let checkedIn;
                if (!user) checkedIn = event?.attendees.includes({ email: qrDetails.email })
                checkedIn = event?.attendees.includes({ userID: user?._id })
                if (checkedIn) return res.status(400).json({ msg: 'Already checked in' });
                //  reject if not paid but needed to test stuff out first expecially the amount of stuff in the array @ any point in time            if(event?.registered.pa)
                if (!user) {
                    event?.attendees.push({ email: qrDetails.email })
                } else {
                    event?.attendees.push({ userID: user?._id });
                    // needed to confirm stuff  
                    event?.attendees2.push({ userID: user?._id });
                }
                return res.status(200).json({ msg: 'Check-in successful' });
            })
            .catch(err => (res.status(400).json({ msg: 'You probably haven\'t registered for this event', err })))

    } catch (err: any) {
        res.status(500).json({ data: { msg: 'Server error', error: err.message, status: err.status } });
    }
};

export const checkInToEvent2: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const qrDetails = req.body;


        // check if user registered for the selected event

        const user = await User.findOne({ email: qrDetails.email })

        // Event.findOne({ registered: { $elemMatch: { userID: user?._id } } });
        Event.findById(id).where('registered').elemMatch({ userID: user?._id })
            .then(event => {
                let checkedIn;
                if (!user) checkedIn = event?.attendees.includes({ email: qrDetails.email })
                checkedIn = event?.attendees.includes({ userID: user?._id })
                if (checkedIn) return res.status(400).json({ msg: 'Already checked in' });
                if (!user) {
                    event?.attendees.push({ email: qrDetails.email })
                } else {
                    event?.attendees.push({ userID: user?._id });
                    // needed to confirm stuff  
                    event?.attendees2.push({ userID: user?._id });
                }
                return res.status(200).json({ msg: 'Check-in successful' });
            })
            .catch(err => (res.status(400).json({ msg: 'You probably haven\'t registered for this event or make sure you\'ve paid', err })))

    } catch (err: any) {
        res.status(500).json({ data: { msg: 'Server error', error: err.message, status: err.status } });
    }
};

export const createEvent: RequestHandler = async (req, res, next) => {
    try {
        // @ignore
        const my_details: any = req.user;
        const eventDetails = req.body;

        if (my_details.userType !== userType.admin || my_details.userType !== userType.organizer) {
            // throw new Error('Not authorized to access this endpoint ADMIN/ORGAnizer')
            return res.status(403).json({ data: { msg: 'Not authorized to access this endpoint' } })
        }

        const exists = await Event.findOne({ title: eventDetails.title });
        if (!exists) {
            // eventDetails._id = mongoose.Types.ObjectId(my_details._id)
            // eventDetails.userID = my_details._id
            const eventObj = {
                creatorID: my_details._id,
                ...eventDetails,
                list: new Map([])
            }

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
        console.log(my_details)
        console.log(userType.admin)
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
        const {id} = req.params;

        const condition = { creatorID: my_details._id, _id: id };
        let options = { lean: true, new: true }

        const update = {...req.body}

        const updated = Event.findOneAndUpdate(condition, update, options);
        if(updated) return res.status(200).json({ data: { msg: 'Event updated', event: updated } });
        return res.status(400).json({ data: { msg: 'Updated failed' } })
    } catch (err: any) {
        res.status(500).json({ data: { msg: 'Server error', error: err.message } });
    }
}

export const createCheckIn: RequestHandler = async (req, res) => {
    try {
        // const my_details: any = req.user;

        // if (my_details.role !== userType.admin || my_details.role !== userType.organizer) {
        //     throw new Error('You don\'t have access to this');
        // }

        const { id } = req.params;
        const { name, qualifiedTags } = req.body;
        await Scanner.findOneAndRemove({ name })
        const exists = await Scanner.findOne({ name });
        if (exists) return res.status(400).json({ data: { msg: 'Scanner already exists' } });

        let event = await Event.findById(id);
        if (!event) return res.status(400).json({ data: { msg: 'Event not found' } })
        const checkInObj = {
            ...req.body,
            eventID: event._id
        }
        const scanner = await new Scanner(checkInObj).save();
        if (!scanner) return res.status(400).json({ data: { msg: 'Error creating checkIn' } });
        const ev = {
            ...event,
            list: []
        }

        console.log(event.list)
        // event = ev
        event['list'].set(name, []);
        console.log(event.list)
        // look for event with that ID and set the qualifiedcat as a field that stores array of ......
        // const list: Map<string, any> = new Map([]);
        // qualifiedTags.forEach((tags: string) => {
        //     console.log(tags)
        //     list.set(tags, [])
        //     console.log(list)
        //     event.list = list
        // })
        const updated = await event.save()
        if (!updated) return res.status(400).json({ data: { msg: 'Event update failed' } })
        return res.status(201).json({ data: { msg: 'Scanner created', scanner, event } })
    } catch (err: any) {
        res.status(500).json({ data: { msg: 'Server error', error: err.message, status: err.status } });
    }
};

export const scan: RequestHandler = async (req, res) => {
    try {
        const { eventID, scannerID } = req.params;
        const { scannerName, userID, email } = req.body;
        const scanner = await Scanner.findById(scannerID);
        if (!scanner) return res.status(404).json({ data: { msg: 'Scanner not found' } })

        const event = await Event.findById(eventID);
        if (!event) return res.status(404).json({ data: { msg: 'Event not found' } })
        const user: any = event.registered.find((usr: any) => {
            if (usr.userID) {
                return usr.userID.toString() === userID;
            } else {
                return usr.email === email
            }
        })
        if (!user) return res.status(404).json({ data: { msg: 'User not found' } })
        console.log(user.tag)
        console.log(scanner.qualifiedTags[0])
        console.log(user.tag = scanner.qualifiedTags[0] ? 'true' : 'falsde')
        console.log(scanner.qualifiedTags.includes(user.tag))
        console.log(scanner.qualifiedTags.indexOf(user.tag))
        console.log(scanner)
        const fi = scanner.qualifiedTags.find(f => f === user.tag)
        console.log(fi)
        if (scanner.qualifiedTags.indexOf(user.tag) !== -1) {
            const exists = isDuplicate(userID, email)
            if (exists) return res.status(400).json({ data: { msg: `${user.firstName} already been checked/marked` } });
            event.list.get(scannerName).push(email);
            const marked = await event.save();
            if (!marked) return res.status(400).json({ data: { msg: `Erroor adding to ${scannerName}'s list` } })
            return res.status(200).json({ data: { msg: 'Checked/marked successfully', list: marked.list } })
        }
        // let qualified;
        // scanner.qualifiedTags.forEach(tag => {
        //     tag === user.tag ? qualified = true : qualified = false;
        //     if(true) break
        //     // break
        // })
        return res.status(400).json({ data: { msg: `Bearers category not previledge to this` } })

        function isDuplicate(userID: string, email: string) {
            const exists = event!.list.get(scannerName).includes(userID || email);
            return exists
        }

        // if(scannerName === 'Attendance') {
        //     event.attendees2.push(email)
        // } else {
        //     // const n = [...event.list.get(scannerName)]
        //     // event.list.set(scannerName, )
        //     event.list.get(scannerName).push(email)
        // }
        // const marked = await event.save();
        // if(!marked) return res.status(404).json({ data: { msg: 'Scan failed' }});
        // return res.status(201).json({ data: { msg: 'Scanner not found' }, event: marked })

        // const tags: Map<string, any> = new Map([]);
        // console.log(scanner.qualifiedTags, 1)
        // scanner.qualifiedTags.forEach(tag => {
        //     console.log(event.list, 2)
        //     tags.set(tag, [req.body.email])
        //     // if(event.dynamicField) {
        //     //     console
        //     // }
        //     // event.dynamicField = tags
        //     // event.dynamicField.Object[tag]
        // });
        // console.log(tags, 3)
        // console.log(event.list, 4)
        // await event.save()
        // event.dynamicField = tags;
    } catch (err: any) {
        res.status(500).json({ data: { msg: 'Server error', error: err.message, status: err.status } });
    }
};

export const deleteEvent: RequestHandler = async (req, res) => {
    try {
        const my_details: any = req.user;
        if (my_details.userType === userType.user) {
            return res.status(403).json({ data: { msg: 'Not authorized to access this' } })
        }
        const {id} = req.params;

        const condition = { creatorID: my_details._id, _id: id };

        const deleted = await Event.findOneAndDelete(condition);
        if(deleted) return res.status(200).json({ data: { msg: 'Event deleted' } });
        return res.status(400).json({ data: { msg: 'Deletion failed' } });
    } catch (err: any) {
        res.status(500).json({ data: { msg: 'Server error', error: err.message } });
    }
}