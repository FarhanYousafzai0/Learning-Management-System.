import axios from 'axios'

const base_url = 'http://localhost:5001/api/quiz/'
 export const addQuiz = async(quizData)=>{
    const response = await axios.post(`${base_url}/add-quiz`,quizData)
    return response.data
}



export const getQuiz = async()=>{
    const response = await axios.get(`${base_url}/get-quiz`);
    return response.data
}
export default addQuiz
