import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import user from '../model/UserModel.js';
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';

// ==========================
// Register Controller
// ==========================
export const register = asyncHandler(async (req, res) => {
    const generateOTP = () => Math.floor(10000 + Math.random() * 90000); // Always 5-digit OTP

    const { name, username, password, email, gender } = req.body;

    if (!name || !username || !password || !email || !gender) {
        return res.status(400).json({ error: "Please enter all the fields!" });
    }

    const existingUser = await user.findOne({ username });
    const existingEmail = await user.findOne({ email });

    if (existingUser) {
        return res.status(409).json({ error: "Username already exists!" });
    }

    if (existingEmail) {
        return res.status(409).json({ error: "Email already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = generateOTP();

    const registerData = await user.create({
        name,
        username,
        email,
        password: hashedPassword,
        gender,
        otp
    });

    const { password: _, otp: __, ...userWithoutSensitive } = registerData._doc;
    res.status(201).json(userWithoutSensitive);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER_MAIL,
            pass: process.env.MAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.USER_MAIL,
        to: email,
        subject: 'OTP Verification',
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>OTP Verification</title></head>
        <body style="font-family: Arial, sans-serif; background-color: #f4f7f6; margin: 0; padding: 0;">
            <div style="max-width: 500px; margin: 50px auto; background-color: #ffffff; border-radius: 15px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1); overflow: hidden;">
                <div style="background-color: #0F9E99; color: #fff; text-align: center; padding: 20px;">
                    <h1 style="margin: 0; font-size: 28px;">🔒 OTP Verification</h1>
                </div>
                <div style="padding: 40px 20px; text-align: center;">
                    <p style="font-size: 16px; color: #555;">Use the OTP below to verify your email:</p>
                    <div style="display: inline-block; background-color: #0F9E99; color: #ffffff; font-weight: bold; font-size: 32px; padding: 15px 40px; border-radius: 10px; letter-spacing: 5px; margin-top: 10px;">
                        ${otp}
                    </div>
                    <p style="margin-top: 20px; color: #888;">This OTP is valid for <b>10 minutes</b>. Please do not share it with anyone.</p>
                </div>
                <div style="background-color: #EFE9E0; text-align: center; padding: 10px;">
                    <p style="margin: 0; color: #666; font-size: 12px;">&copy; 2025 LMS Company. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('OTP sent successfully!');
    } catch (err) {
        console.log(`Email sending failed: ${err.message}`);
    }
});

// ==========================
// Login Controller
// ==========================
export const login = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const findUser = await user.findOne({ username });

    if (!findUser) {
        return res.status(401).json({ error: "Invalid username!" });
    }

    const isMatch = await bcrypt.compare(password, findUser.password);

    if (!isMatch) {
        return res.status(401).json({ error: "Invalid password" });
    }

    const { password: _, otp: __, ...userWithoutSensitive } = findUser._doc;
    res.status(200).json(userWithoutSensitive);
});

// ==========================
// Logout Controller
// ==========================
export const logout = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Logout successful!" });
});
