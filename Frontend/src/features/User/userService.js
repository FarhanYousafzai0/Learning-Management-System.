import axios from 'axios';

const base_url = 'http://localhost:5001/api/user';

// Set user to localStorage
const saveUserToStorage = (data) => {
  if (data) {
    localStorage.setItem('user', JSON.stringify(data));
  }
};

// Register User
export const regUser = async (userData) => {
  const response = await axios.post(`${base_url}/register`, userData);
  saveUserToStorage(response.data);
  return response.data;
};

// Login User
export const logUser = async (userData) => {
  const response = await axios.post(`${base_url}/login`, userData);
  saveUserToStorage(response.data);
  return response.data;
};

// OTP Verification
export const otpVerify = async (otpData) => {
  const response = await axios.post(`${base_url}/otp/${otpData.id}`, {
    otp: otpData.otp,
  });
  return response.data;
};

export const getUser = async () => {
  const response = await axios.get(`${base_url}/getUser`);
  return response.data;
}
