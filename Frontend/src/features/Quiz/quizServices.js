import axios from 'axios'


const base_url = 'http://localhost:5001/api/quiz/'
const addQuiz = async(quizData)=>{
    const response = await axios.post(`${base_url}/add-quiz`,quizData)
    return response.data
}

export default addQuiz