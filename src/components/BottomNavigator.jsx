// src/components/BottomNavigator.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaExchangeAlt, FaUser, FaUsers, FaMoneyBill } from "react-icons/fa";

export default function BottomNavigator() {
  const links = [
    { to: "/dashboard", icon: <FaHome />, label: "Home" },
    { to: "/trade", icon: <FaExchangeAlt />, label: "Trade" },
    { to: "/deposit", icon: <FaMoneyBill />, label: "Deposit" },
    { to: "/team", icon: <FaUsers />, label: "Team" },
    { to: "/profile", icon: <FaUser />, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-white shadow-inner border-t p-2 flex justify-around">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `flex flex-col items-center text-gray-500 ${
              isActive ? "text-blue-600" : ""
            }`
          }
        >
          {link.icon}
          <span className="text-xs">{link.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
