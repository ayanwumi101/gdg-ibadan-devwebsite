import mongoose, { Schema } from 'mongoose';

export interface EvenT {
    creatorID?: string;
	title: string;
	description: string;
	location: string;
	passcode: string;
    // registrationData: Map<string, any>;
    registrationData: string[];
	tags: string[];
	eventType: string;
	ticketType: object;
    registered: object[];
	attendees: Array<object>;
	attendees2: Array<any>;
	maxAttendees: number;
	list: Map<string, any>
}

const eventTypeEnum = [ 'free', 'paid' ];

const eventSchema: Schema<EvenT> = new Schema({
	creatorID: { type: Schema.Types.ObjectId, ref: 'User'},
    title: { type: String, required: true, lowercase: true, index: true },
	description: { type: String, required: true },
	// location: { type: String, required: true, lowercase: true, index: true },
	// startDateTime: { type: Date, required: true },
	// endDateTime: { type: Date, required: true },
	// date: { type: Date, required: false },
	// time: String,
	// passcode: { type: String, required: true, default: null },
    registrationData: [],
	tags: [ { type: String, default: ['speaker', 'guest', 'organizer']} ],
	registered: [{
        userID: { type: Schema.Types.ObjectId, ref: 'User' },
        firstName: String,
        lastName: String,
        email: String,
        phoneNumber: Number, 
        paid: { type: Boolean, required: true, default: false},
        dynamicField: { type: Map, of: Schema.Types.Mixed },
		tag: String
    }],
	// attendees: [{
	// 	userID: {type: Schema.Types.ObjectId, ref: 'User'},
	// 	email: String
	// }],
	// attendees2: [ {type: Schema.Types.Mixed} ],
	// maxAttendees: { type: Number, required: true },
	list: { type: Map, of: Schema.Types.Mixed },
	
	eventType: { type: String, required: true, enum: eventTypeEnum, default: 'free' },
	ticketType: { 
		Gold: {type: Number, default: 0},
		Silver: {type: Number, default: 0},
		Bronze: {type: Number, default: 0}
	},
    
});

export default mongoose.model<EvenT>('Event', eventSchema);