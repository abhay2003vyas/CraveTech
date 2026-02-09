import axios from "axios";

const api = axios.create({
  baseURL: "https://cravetechbackend.onrender.com/api",
});

export default api;
