import axios from 'axios';

const api = axios.create({
  baseURL: ` ${process.env.NEXT_PUBLIC_BACKEND_URL}/api`,
  withCredentials: true, 
});

api.interceptors.response.use(
    response => response,
    error => {
      if (error.response?.status === 401) {
        console.warn('Not logged in.');
       
      }
      return Promise.reject(error);
    }
  );
  
export default api;
