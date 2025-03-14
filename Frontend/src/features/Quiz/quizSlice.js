import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import addQuiz from "./quizServices";

const initialState = {
    quiz: [],
    quizLoading: false,
    quizSuccess: false,
    quizError: false,
    quizMessage: "",
};

export const addQuizData = createAsyncThunk(
    "add-quiz",
    async (quizData, thunkAPI) => {
        try{
            return await addQuiz(quizData)
        } catch (error){
            return thunkAPI.rejectWithValue(error.response?.data?.message || "Please enter all the values");
        }
    }
);

export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        quizReset: (state) => {
            state.quiz = [];
            state.quizError = false;
            state.quizLoading = false;
            state.quizMessage = "";
            state.quizSuccess = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addQuizData.pending, (state) => {
                state.quizLoading = true;
            })
            .addCase(addQuizData.rejected, (state, action) => {
                state.quizLoading = false;
                state.quizError = true;
                state.quizMessage = action.payload;
            })
            .addCase(addQuizData.fulfilled, (state, action) => {
                state.quizLoading = false;
                state.quizSuccess = true;
                state.quiz.push(action.payload);
            });
    },
});

export default quizSlice.reducer;
export const { quizReset } = quizSlice.actions;
