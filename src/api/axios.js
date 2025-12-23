import axios from "axios";

const api = axios.create({
  baseURL: "https://adex-trade-backend-testing.onrender.com/api", // <- must match your backend
  withCredentials: false,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
