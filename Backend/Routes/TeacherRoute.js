import express from "express";
import { createTeacher, getTeacher } from "../Controllers/TeacherController.js";

const router = express.Router();


router.post("/createTeacher", createTeacher);

router.get('/getTeacher', getTeacher);


export default router;