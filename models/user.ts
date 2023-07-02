import { Schema, InferSchemaType, model } from "mongoose";

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

const userSchema = new Schema({
	// _id: { type: mongoose.Types.ObjectId },
    // firstName: { type: String, required: true, index: true },
	// lastName: { type: String, required: true, index: true },
	email: { type: String, required: true },
	password: { type: String, required: true, default: null },
	// phoneNumber: { type: String, required: true },
    userType: { type: String, required: true, enum: userType, default: 'user' },
	status: { type: String, required: true, enum: accountStatus, default: 'pending' },
	code: { type: String, required: true },
	// OTP: String,
	createdDate: { type: Date, default: Date.now },
	lastLogin: { type: Date, default: null },
}, {timestamps: true });

type User = InferSchemaType<typeof userSchema>

export default model<User>('User', userSchema);