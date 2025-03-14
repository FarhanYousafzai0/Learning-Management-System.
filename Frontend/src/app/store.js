import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../features/Quiz/quizSlice";

const store = configureStore({
    reducer: {
    quiz: quizReducer  // ✅ Corrected reducer key to match `quizSlice` name
    }
});

export default store;
