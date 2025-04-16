import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getTeacher } from "./TeacherService";



const initialState = {
  teachers: [],
  teacherLoading: false,
    teacherError: false,
    teacherSuccess: false,
    teacherMessage: null,       

}


// Async thunk for fetching teachers

export const fetchTeachers = createAsyncThunk("fetchTeacher", async(teacherData,thunkAPI) => {

try {
    return await getTeacher(teacherData)

} catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message)
}

});

// Teacher slice

const TeacherSlice = createSlice({
    name: "teacher",
    initialState,
    reducers: {
        resetTeacherState: (state) => {
            state.teacherLoading = false;
            state.teacherError = false;
            state.teacherSuccess = false;
            state.teacherMessage = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTeachers.pending, (state) => {
            state.teacherLoading = true;
        })
        .addCase(fetchTeachers.fulfilled, (state, action) => {
            state.teachers = action.payload;
            state.teacherLoading = false;
            state.teacherSuccess = true;
        })
        .addCase(fetchTeachers.rejected, (state, action) => {
            state.teacherLoading = false;
            state.teacherError = true;
            state.teacherMessage = action.payload;
        });
    },
});

export const { resetTeacherState } = TeacherSlice.actions;

export default TeacherSlice.reducer;