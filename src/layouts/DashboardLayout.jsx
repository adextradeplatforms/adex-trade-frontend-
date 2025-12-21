// src/layouts/DashboardLayout.jsx
import { NavLink } from "react-router-dom";

export default function DashboardLayout({ children }) {
  const links = [
    { name: "Home", path: "/dashboard" },
    { name: "Trade", path: "/trade" },
    { name: "Team", path: "/team" },
    { name: "Me", path: "/profile" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Main content */}
      <main className="flex-1 p-4 pb-20">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md">
        <div className="flex justify-around items-center h-14">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? "text-blue-600" : "text-gray-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
