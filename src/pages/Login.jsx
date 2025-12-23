import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios"; // use the API instance
import "./Auth.css";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await api.post("/auth/login", formData); // ✅ uses hosted backend
      localStorage.setItem("token", res.data.token); // store JWT
      setLoading(false);
      navigate("/dashboard"); // redirect to Dashboard
    } catch (err) {
      setLoading(false);
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {message && <p className="auth-message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p>
        Don't have an account? <span onClick={() => navigate("/register")}>Register</span>
      </p>
    </div>
  );
}
