import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import addQuiz, { getQuiz } from "./quizServices";

const initialState = {
    quiz: [],
    quizLoading: false,
    quizSuccess: false,
    quizError: false,
    quizMessage: "",
};

// Add Quiz Data 
export const addQuizData = createAsyncThunk(
    "add-quiz",
    async (quizData, thunkAPI) => {
        try {
            return await addQuiz(quizData);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.error || error.message || "An unexpected error occurred"
            );
        }
    }
);

// Get Quiz Data
export const getQuizData = createAsyncThunk(
    "get-quiz",
    async (_, thunkAPI) => {
        try {
            return await getQuiz();
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.error || error.message || "Failed to fetch quizzes"
            );
        }
    }
);

// Creation of Slice
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
            // Add Quiz Data
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
            })

            // Get Quiz Data
            .addCase(getQuizData.pending, (state) => {
                state.quizLoading = true;
            })
            .addCase(getQuizData.rejected, (state, action) => {
                state.quizError = true;
                state.quizLoading = false;
                state.quizMessage = action.payload;
            })
            .addCase(getQuizData.fulfilled, (state, action) => {
                
                state.quiz = action.payload; // Correctly assigns quiz data
            });
    },
});

export default quizSlice.reducer;
export const { quizReset } = quizSlice.actions;
