import mongoose, { Date, Schema } from 'mongoose';

export interface EvenT {
    creatorID?: string;
	title: string;
	description: string;
	location: string;
	startDate: Date;
	endDate: Date;
	passcode: string;
    registrationData: string[];
	tags: string[];
	eventType: string;
	ticketType: object;
    registered: object[];
	maxAttendees: number;
	list: object;
	test: Map<string, any>
}

const eventTypeEnum = [ 'free', 'paid' ];

const eventSchema: Schema<EvenT> = new Schema({
	creatorID: { type: Schema.Types.ObjectId, ref: 'User'},
    title: { type: String, required: true, index: true },
	description: { type: String, required: true },
	location: { type: String, required: true, index: true },
	startDate: { type: Date, required: true },
	endDate: { type: Date, required: true },
	passcode: { type: String, default: null },
    registrationData: [],
	tags: [ { type: String, default: ['speaker', 'guest', 'organizer']} ],
	registered: [{
        userID: { type: Schema.Types.ObjectId, ref: 'User' },
        firstName: String,
        lastName: String,
        email: String,
        phoneNumber: Number, 
        dynamicData: { type: Map, of: Schema.Types.Mixed },
		code: { type: String, required: true },
		ticket: String,
        paid: { type: Boolean, required: true, default: false},
    }],
	maxAttendees: { type: Number, required: false },
	test: { type: Map, of: Schema.Types.Mixed },
	list: {
		attendance: [{
			firstName: String,
			lastName: String,
			email: String,
			phoneNumber: Number,
		}],
		lunch: [{
			firstName: String,
			lastName: String,
			email: String,
			phoneNumber: Number,
		}],
		swags: [{
			firstName: String,
			lastName: String,
			email: String,
			phoneNumber: Number,
		}]
	},
	eventType: { type: String, required: true, enum: eventTypeEnum, default: 'free' },
	ticketType: { 
		speaker: {type: Number, default: 0},
		guest: {type: Number, default: 0},
		organizer: {type: Number, default: 0},
		dynamicTicket: { type: Map, of: Schema.Types.Mixed }
	},
    
}, {timestamps: true, strictPopulate: false });

export default mongoose.model<EvenT>('Event', eventSchema);