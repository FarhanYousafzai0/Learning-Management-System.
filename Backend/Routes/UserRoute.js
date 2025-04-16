import express from 'express'
import { getUser, login, logout, OTPVerification, register } from '../Controllers/UserContoler.js';



const userRouter = express.Router();


// Register:
userRouter.post('/register',register);
// Login:
userRouter.post('/login',login);

// Logout:
userRouter.post('/logout',logout);


// otp
userRouter.post('/otp/:id',OTPVerification)


userRouter.get('/getUser',getUser);

export default userRouter