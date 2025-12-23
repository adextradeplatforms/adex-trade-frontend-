import axios from "axios";

// Use VITE_API_URL from environment
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false, // set true if your backend requires cookies
});

// Automatically attach token from localStorage
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
