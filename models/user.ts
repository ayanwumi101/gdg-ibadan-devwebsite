import { Schema, InferSchemaType, model } from "mongoose";

export enum userType {
    admin = 'admin',
	organizer = 'organizer',
    user = 'user'
}


const userSchema = new Schema({
    firstName: { type: String, required: true, index: true },
	lastName: { type: String, required: true, index: true },
	email: { type: String, required: true },
	password: { type: String, required: true, default: null },
	phoneNumber: { type: String, required: true },
    userType: { type: String, required: true, enum: userType, default: 'user' },
	code: { type: String, required: true },
	verified: { type: Boolean, default: false },
	createdDate: { type: Date, default: Date.now },
	lastLogin: { type: Date, default: null },
}, {timestamps: true });

type User = InferSchemaType<typeof userSchema>

export default model<User>('User', userSchema);