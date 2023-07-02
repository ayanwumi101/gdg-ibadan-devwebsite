import mongoose, { Schema, InferSchemaType, model } from "mongoose";

export enum userType {
    admin = 'admin',
	organizer = 'organizer',
    user = 'user'
}

export enum accountStatus {
    pending = 'pending',
    declined = 'declined',
    approved = 'approved'
}

const listSchema = new Schema({
	eventID: { type: Schema.Types.ObjectId , ref: 'Event' },
    userID: { type: Schema.Types.ObjectId , ref: 'User' },
    scannerName: { type: String, required: true },
	createdDate: { type: Date, default: Date.now },
}, {timestamps: true });

type List = InferSchemaType<typeof listSchema>

export default mongoose.model<List>('List', listSchema);