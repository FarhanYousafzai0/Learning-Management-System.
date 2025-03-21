import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import quizRouter from './Routes/QuizRouter.js';
import { errorHandler } from './Middleware/errorMiddleware.js';
import { connectDB } from './config/Connect.js';
import cors from 'cors';
import userRouter from './Routes/UserRoute.js';

dotenv.config();

const app = express();
connectDB();
app.use(cors());

// Conversion of data into JSON for handling API requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Routes
app.use('/api/quiz/', quizRouter);
app.use('/api/user',userRouter)

// Error Handling Middleware
app.use(errorHandler);

// Port Configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server has been started on ${PORT}`.yellow));
