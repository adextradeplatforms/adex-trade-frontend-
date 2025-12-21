import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-inner flex justify-around py-2">
        <Link to="/" className="flex flex-col items-center text-gray-700">
          🏠 <span className="text-xs">Home</span>
        </Link>
        <Link to="/trade" className="flex flex-col items-center text-gray-700">
          💹 <span className="text-xs">Trade</span>
        </Link>
        <Link to="/team" className="flex flex-col items-center text-gray-700">
          👨‍👨‍👧‍👦 <span className="text-xs">Team</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center text-gray-700">
          👤 <span className="text-xs">Profile</span>
        </Link>
      </nav>

      {/* Floating Invite button */}
      <Link
        to="/invite"
        className="fixed right-4 bottom-16 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
      >
        🔗 Invite
      </Link>
    </div>
  );
}
