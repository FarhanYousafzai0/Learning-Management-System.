import express from "express";
import { createTeacher } from "../Controllers/TeacherController.js";

const router = express.Router();


router.post("/createTeacher", createTeacher);



export default router;