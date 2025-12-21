import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  const [showBalance, setShowBalance] = useState(true);
  const user = {
    username: "WizJay",
    email: "wizjayweb@gmail.com",
    balance: 2500.75,
  };

  return (
    <div className="profile-page">
      <h2 className="profile-header">My Profile</h2>

      <div className="profile-card">
        <h3>User Info</h3>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p>
          <strong>Balance:</strong>{" "}
          {showBalance ? `$${user.balance.toFixed(2)}` : "****"}
          <button className="toggle-btn" onClick={() => setShowBalance(!showBalance)}>
            {showBalance ? "Hide" : "Show"}
          </button>
        </p>
      </div>

      <div className="profile-card">
        <h3>Security</h3>
        <p>Change Password</p>
        <p>Two-Factor Authentication: Off</p>
      </div>

      <div className="profile-card">
        <h3>Settings</h3>
        <p>Dark/Light Mode</p>
        <p>Notifications</p>
      </div>

      <button className="logout-btn">Logout</button>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>🏠 Dashboard</NavLink>
        <NavLink to="/trade" className={({ isActive }) => isActive ? "active" : ""}>💹 Trade</NavLink>
        <NavLink to="/team" className={({ isActive }) => isActive ? "active" : ""}>👨‍👩‍👧 Team</NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>👤 Profile</NavLink>
      </div>
    </div>
  );
}
