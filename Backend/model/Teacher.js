// models/TeacherApplication.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const teacherApplicationSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  subjectSpecialization: { type: String, required: true },
  qualification: { 
    type: String, 
    required: true,
    enum: ['High School', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD', 'Professional Certification']
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other', 'Prefer not to say'],
    required: true
  },
  dateOfBirth: { type: Date, required: true },
  profilePhoto: { type: String }, // URL to stored image
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
  
});

module.exports = mongoose.model('TeacherApplication', teacherApplicationSchema);