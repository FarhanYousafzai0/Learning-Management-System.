import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { regUser } from "./userService";


const isUser = JSON.parse(localStorage.getItem("user"));



const initialState = {
    auth: isUser ? isUser : null,
    userLoading : false,
    userError:false,
    userSuccess:false,
    userMessage:"",
    allUser : []
}




export const regUserData = createAsyncThunk("register-user",async(userData,thunkAPI)=>{

    try {
        
       return await regUser(userData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.error)
    }
})


// Create-Slice

export const userSlice = createSlice({

    name:auth,
    initialState,
    reducers:{
        userReset:(state)=>{
            state.userLoading = false,
            state.userError = false,
            state.userSuccess = false,
            state.userMessage = ""

        }
    },
    extraReducers:(builder)=>{
builder.addCase(regUserData.pending,(action,state)=>{
    state.userLoading = true;
})
.addCase(regUserData.rejected,(action,state)=>{
    state.userLoading = false,
    state.userError = true,
    state.userMessage = action.payload,
    state.user = null
})
.addCase(regUserData.fulfilled,(action,state)=>{
    state.userError = false,
    state.userLoading = false,
    state.userSuccess = true,
    state.userMessage = action.payload
})

    },
});

export default userSlice.reducer

