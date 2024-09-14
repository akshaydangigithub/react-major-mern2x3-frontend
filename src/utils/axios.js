import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: "https://e-com-connect-backend.vercel.app/",
});

export default instance;
