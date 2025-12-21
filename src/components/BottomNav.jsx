import { NavLink } from "react-router-dom";
import "./BottomNav.css";

export default function BottomNav() {
  return (
    <div className="bottom-nav">
      <NavLink to="/dashboard">Home</NavLink>
      <NavLink to="/trade">Trade</NavLink>
      <NavLink to="/team">Team</NavLink>
      <NavLink to="/profile">Me</NavLink>
    </div>
  );
}
