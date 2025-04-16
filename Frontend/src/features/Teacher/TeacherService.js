import axios from "axios";

const base_url = "http://localhost:5001/api/teacher/";

// Function to create a teacher
export const createTeacher = async (teacherData) => {
  try {
    const response = await axios.post(`${base_url}createTeacher`, teacherData);
    return response.data;
  } catch (error) {
    console.error("Error creating teacher:", error);
    throw error; // rethrow the error to be caught in the calling code
  }
};

// Function to get teacher data
export const getTeacher = async () => {
  try {
    const response = await axios.get(`${base_url}getTeacher`);
    return response.data;
  } catch (error) {
    console.error("Error fetching teacher data:", error);
    throw error;
  }
};
