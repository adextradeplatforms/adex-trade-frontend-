import React from "react";
import { NavLink } from "react-router-dom";
import "./Team.css";

export default function Team() {
  return (
    <div className="team-page">
      <h2 className="team-header">👨‍🦰 Team Bonus</h2>

      <div className="team-card">
        <p>Level 1: 8%</p>
        <p>Level 2: 6%</p>
        <p>Level 3: 4%</p>
        <p>Level 4: 2%</p>
        <p>Level 5: 1%</p>
      </div>

      <div className="team-card">
        <p>🔈 You can get a 3% discount on the deposit of the first level member.</p>
      </div>

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
