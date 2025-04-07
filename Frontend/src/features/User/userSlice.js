import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { regUser } from "./userService";

// Get user from localStorage
const isUser = JSON.parse(localStorage.getItem("user"));

// Initial state
const initialState = {
    auth: isUser || null,
    userLoading: false,
    userError: false,
    userSuccess: false,
    userMessage: "",
    allUser: []
};

// Register user - AsyncThunk
export const regUserData = createAsyncThunk(
    "register-user",
    async (userData, thunkAPI) => {
        try {
            return await regUser(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.error || "Something went wrong");
        }
    }
);

// Create userSlice
export const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userReset: (state) => {
            state.userLoading = false;
            state.userError = false;
            state.userSuccess = false;
            state.userMessage = "";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(regUserData.pending, (state) => {
                state.userLoading = true;
            })
            .addCase(regUserData.rejected, (state, action) => {
                state.userLoading = false;
                state.userError = true;
                state.userMessage = action.payload;
                state.auth = null;
            })
            .addCase(regUserData.fulfilled, (state, action) => {
                state.userLoading = false;
                state.userError = false;
                state.userSuccess = true;
                state.auth = action.payload;
                state.userMessage = "User registered successfully";
            });
    }
});

export const { userReset } = userSlice.actions;

export default userSlice.reducer;
