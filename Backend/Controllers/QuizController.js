import asyncHanlder from 'express-async-handler'
import mongoose from 'mongoose';
import { Quiz } from '../model/QuizModel.js';


export const getPost =asyncHanlder(
   async (req, res) => {
        const { question, deadline, time, max_marks, batch_no, course_name } = req.body;
    
        if (!question || !deadline || !time || !max_marks || !batch_no || !course_name) {
            res.status(400).json({ error: "Please enter all the values." });
            return; // Important to stop further code execution
        }
    
        res.json({
            question,
            deadline,
            time,
            max_marks,
            batch_no,
            course_name
        });
    
    const newQuiz = await Quiz.create({
        question,
        deadline,
        max_marks,
        batch_no,
        course_name,
        time,
    })
    res.send(newQuiz)
    
    }
) ;
