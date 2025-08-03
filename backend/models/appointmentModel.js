import mongoose from "mongoose";
//schema for appointmnt 
const appointmntSchema = new mongoose.Schema({
    userId: { type: String, required: true},
    docId: { type: String, required: true},
    slotDate: { type: String, required: true},
    slotTime: { type: String, required: true},
    userData: { type: Object, required: true},
    docData: { type: Object, required: true},
    amount: { type: Number, required: true},
    date: { type: Number, required: true},
    cancelled: {type: Boolean,default:false},
    payment: {type:Boolean,default:false},
    isCompleted : {type: Boolean, default:false}
})

//Model for apointment

const appointmntModel = mongoose.models.appointmnt || mongoose.model('appointment',appointmntSchema)

export default appointmntModel