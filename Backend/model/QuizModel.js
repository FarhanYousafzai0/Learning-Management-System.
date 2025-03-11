import mongoose from "mongoose";

export const quizSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Question is required"]
    },
    deadline: {
        type: Date,
        required: [true, "Deadline is required"]
    },
    max_marks: {
        type: Number,
        required: [true, "Maximum marks are required"]
    },
    batch_no: {
        type: Number,
        required: [true, "Batch number is required"]
    },
    course_name: {
        type: String,
        required: [true, "Course name is required"]
    },
    time: {
        type: String,
        required: [true, "Time is required"]
    }
}, { timestamps: true });


export const Quiz = mongoose.model('Quiz',quizSchema)