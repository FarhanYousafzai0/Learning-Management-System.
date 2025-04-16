import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../features/Quiz/quizSlice";
import userReducer from "../features/User/userSlice"
import TeacherReducer from "../features/Teacher/TeacherSlice"

const store = configureStore({
    reducer: {
    quiz: quizReducer, // ✅ Corrected reducer key to match `quizSlice` name
    auth:userReducer,
    teacher:TeacherReducer,

    }
});

export default store;
