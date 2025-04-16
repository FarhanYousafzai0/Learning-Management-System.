// models/TeacherApplication.js
import mongoose from 'mongoose';
const { Schema } = mongoose;

const teacherApplicationSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  subject: { type: String, required: true },
  qualification: { 
    type: String, 
    required: true,
  },
  gender: {
    type: String,
   
    required: true
  },
  dateOfBirth: { type: Date, required: true },

  
  
});

const TeacherApplication = mongoose.model('TeacherApplication', teacherApplicationSchema);

export default TeacherApplication;