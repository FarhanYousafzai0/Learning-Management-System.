import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser, logUser, otpVerify, regUser } from "./userService";

// Get user from localStorage
const isUser = JSON.parse(localStorage.getItem("user"));

// Initial state
const initialState = {
    user: isUser || null,
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

// Login user - AsyncThunk
export const logUserData = createAsyncThunk(
    "login-user",
    async (userData, thunkAPI) => {
        try {
            return await logUser(userData); // ✅ Fixed: passing userData
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.error || "Login failed");
        }
    }
);

// Verify OTP - AsyncThunk
export const verifyOtp = createAsyncThunk(
    "verify-otp",
    async (otpData, thunkAPI) => {
        try {
            return await otpVerify(otpData);
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.error || "Something went wrong"
            );
        }
    }
);


// get user - AsyncThunk

export const getUserData = createAsyncThunk(
    "get-user",
    async (_, thunkAPI) => {
        try {
            return await getUser(); // ✅ Fixed: removed undefined userData
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
            // Register user
            .addCase(regUserData.pending, (state) => {
                state.userLoading = true;
            })
            .addCase(regUserData.rejected, (state, action) => {
                state.userLoading = false;
                state.userError = true;
                state.userMessage = action.payload;
                state.user = null;
            })
            .addCase(regUserData.fulfilled, (state, action) => {
                state.userLoading = false;
                state.userError = false;
                state.userSuccess = true;
                state.user = action.payload;
                state.userMessage = "User registered successfully";
            })

            // Login user
            .addCase(logUserData.pending, (state) => {
                state.userLoading = true;
            })
            .addCase(logUserData.rejected, (state, action) => {
                state.userLoading = false;
                state.userError = true;
                state.userMessage = action.payload;
                state.user = null;
            })
            .addCase(logUserData.fulfilled, (state, action) => {
                state.userLoading = false;
                state.userError = false;
                state.userSuccess = true;
                state.user = action.payload;
                state.userMessage = "User logged in successfully"; // ✅ better message
            })

            // Verify OTP
            .addCase(verifyOtp.pending, (state) => {
                state.userLoading = true;
            })
            .addCase(verifyOtp.rejected, (state, action) => {
                state.userLoading = false;
                state.userError = true;
                state.userMessage = action.payload;
            })
            .addCase(verifyOtp.fulfilled, (state, action) => {
                state.userLoading = false;
                state.userError = false;
                state.userSuccess = true;
                state.user = action.payload;
            })


            .addCase(getUserData.pending, (state) => {
                state.userLoading = true;
            })
            .addCase(getUserData.rejected, (state, action) => {
                state.userLoading = false;
                state.userError = true;
                state.userMessage = action.payload;
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                state.userLoading = false;
                state.userError = false;
                state.userSuccess = true;
                state.allUser = action.payload; // ✅ Save all users here
            });
    }
});

export const { userReset } = userSlice.actions;

export default userSlice.reducer;
