
import express from 'express'
import {  getQuiz, postQuiz } from '../Controllers/QuizController.js';
const quizRouter = express.Router();


quizRouter.post('/add-quiz',postQuiz)
quizRouter.get('/get-quiz',getQuiz)

export default quizRouter