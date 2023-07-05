import { Schema, InferSchemaType, model } from "mongoose";


const checkInSchema = new Schema({
    name: { type: String, required: true, index: true },
	eventID: { type: Schema.Types.ObjectId, ref: 'Event' },
	qualifiedTickets: [],
    
}, {timestamps: true });

type checkIn = InferSchemaType<typeof checkInSchema>

export default model<checkIn>('CheckIn', checkInSchema);