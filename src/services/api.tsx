import axios from 'axios'

const api = axios.create({
  baseURL: "https://tecwebcod-api.onrender.com",
  headers: {
    Authorization: "Access-Control-Allow-Origin",
  },
});
export default api;