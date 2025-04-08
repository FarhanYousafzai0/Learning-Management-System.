import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String, // Fixed gender type to String
        enum: ['male', 'female', 'other'], // Added enum for valid options
        required: true
    },
    role: {
        type: String,
        default: 'student'
    },
    otp: {
        type: Number,
        default: null // or default: 0 depending on your logic
    },
    batch_no:{
        type:Number,
        default:null
    }
    


}, { timestamps: true })

const user = mongoose.model('User', userSchema);

export default user;
