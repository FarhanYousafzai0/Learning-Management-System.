import axios from "axios";


const base_url = "http://localhost:5001/api/teacher/";

export const createTeacher = async (teacherData) => {
  const response = await axios.post(`${base_url}/createTeacher`, teacherData);
  return response.data;
}


export const getTeacher =async()=>{

    const response = await axios.get(`${base_url}/getTeacher`);
    return response.data
}