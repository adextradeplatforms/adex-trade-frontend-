import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaExchangeAlt, FaMoneyCheckAlt, FaUsers, FaUser, FaGift } from "react-icons/fa";

export default function BottomNavigator() {
  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "Trade", path: "/trade", icon: <FaExchangeAlt /> },
    { name: "Deposit", path: "/deposit", icon: <FaMoneyCheckAlt /> },
    { name: "Withdraw", path: "/withdraw", icon: <FaMoneyCheckAlt /> },
    { name: "Team", path: "/team", icon: <FaUsers /> },
    { name: "Profile", path: "/profile", icon: <FaUser /> },
    { name: "Invite", path: "/invite", icon: <FaGift /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around p-2 md:hidden">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `flex flex-col items-center text-sm ${
              isActive ? "text-green-600" : "text-gray-500"
            }`
          }
        >
          <div className="text-xl">{item.icon}</div>
          <span>{item.name}</span>
        </NavLink>
      ))}
    </nav>
  );
}
