import asyncHandler from 'express-async-handler';
import TeacherApplication from '../model/Teacher.js';

// Post Teacher:
export const createTeacher = asyncHandler(async (req, res) => {
  const {
    fullName,
    email,
    phone,
    subject,
    qualification,
    gender,
    dateOfBirth,
    
  } = req.body;

  if (
    !fullName ||
    !email ||
    !phone ||
    !subject ||
    !qualification ||
    !gender ||
    !dateOfBirth
   
  ) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const teacher = await TeacherApplication.create({
    fullName,
    email,
    phone,
    subject,
    qualification,
    gender,
    dateOfBirth,
   
  });

  res.status(200).json({
    message: 'Teacher Created Successfully',
    teacher,
  });
});


// Get Teacher:

export const getTeacher = asyncHandler(async (req, res) => {
  const teachers = await TeacherApplication.find({});
  res.status(200).json(teachers);
})