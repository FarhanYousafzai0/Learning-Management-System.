import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import user from '../model/UserModel.js'; // Ensure this path is correct
import bcrypt from 'bcrypt';

// ==========================
// Register Controller
// ==========================
export const register = asyncHandler(async (req, res) => {

    // Extract data from request body
    const { name, username, password, email, gender } = req.body;

    // Check if all fields are provided
    if (!name || !username || !password || !email || !gender) {
        return res.status(400).json({ error: "Please enter all the fields!" });
    }

    // Check if username or email already exists
    const existingUser = await user.findOne({ username }); // Fixed 'findone' typo
    const existingEmail = await user.findOne({ email }); // Fixed 'findone' typo

    if (existingUser) {
        return res.status(400).json({ error: "Username already exists!" });
    }

    if (existingEmail) {
        return res.status(400).json({ error: "Email already exists!" });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10); // Fixed typo 'hashPassoword'

    // Save the user data
    const registerData = await user.create({  // Fixed 'mongoose.create' to 'user.create'
        name,
        username,
        email,
        password: hashedPassword, // Use the hashed password here
        gender,
    });

    res.status(201).json(registerData); // Send 201 for successful creation
});

// ==========================
// Login Controller
// ==========================
export const login = asyncHandler(async (req, res) => {
    // Extract username and password from request body
    const { username, password } = req.body;

    // Check if both fields are provided
    if (!username || !password) {
        return res.status(400).json({ error: "Please enter username and password!" });
    }

    // Logic for finding user and verifying password will be added here
});

// ==========================
// Logout Controller
// ==========================
export const logout = asyncHandler(async (req, res) => {
    // Logout logic will be added here (e.g., token removal or session handling)
    res.status(200).json({ message: "Logout successful!" });
});
