
import express from 'express'
import { getPost } from '../Controllers/QuizController.js';
const quizRouter = express.Router();


quizRouter.post('/add-quiz',getPost)

export default quizRouter