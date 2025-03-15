import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import { Quiz } from '../model/QuizModel.js';

export const postQuiz = asyncHandler(async (req, res) => {
    const { question, deadline, time, max_marks, batch_no, course_name } = req.body;

    if (!question || !deadline || !time || !max_marks || !batch_no || !course_name) {
        return res.status(400).json({ error: "Please enter all the values." });
    }

    try {
        const newQuiz = await Quiz.create({
            question,
            deadline,
            time,
            max_marks,
            batch_no,
            course_name,
        });

        res.status(201).json({
            message: 'Quiz created successfully!',
            quiz: newQuiz
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create quiz', details: error.message });
    }
});

export const getQuiz = asyncHandler(async (req, res) => {
    try {
        const allQuizzes = await Quiz.find();
        res.status(200).json(allQuizzes);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch quizzes', error: error.message });
    }
});
