import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import quizRouter from './Routes/QuizRouter.js';
import { errorHandler } from './Middleware/errorMiddleware.js';
import { connectDB } from './config/Connect.js';
import cors from 'cors'

dotenv.config();

const app = express();
connectDB();
app.use(cors())
// Conversion of data into JSON for handling API requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/quiz/', quizRouter); // Fixed the trailing slash in the route

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000; // Added a default port as a fallback
app.listen(process.env.PORT || 5001, console.log(`Server has been started on ${process.env.PORT.bgYellow || 5001}`))
