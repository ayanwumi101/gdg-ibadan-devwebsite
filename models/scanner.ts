import { Schema, InferSchemaType, model } from "mongoose";


const scannerSchema = new Schema({
	// _id: { type: mongoose.Types.ObjectId },
    name: { type: String, required: true, index: true },
	eventID: { type: Schema.Types.ObjectId, ref: 'Event' },
	qualifiedTags: [ {type: String} ],
    
	createdDate: { type: Date, default: Date.now },
}, {timestamps: true });

type Scanner = InferSchemaType<typeof scannerSchema>

export default model<Scanner>('Scanner', scannerSchema);