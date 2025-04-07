import { retry } from '@reduxjs/toolkit/query';
import axios from 'axios'


const base_url = 'http://localhost:5001/api/user';


export const regUser = async(userData)=>{

    const response = await axios.post(`${base_url}/register`,userData)
    if(response.data){
        localStorage.setItem("user",JSON.stringify(response.data))
    }
return response.data
 
}