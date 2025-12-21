import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import BottomNavigator from "./components/BottomNavigator";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Trade from "./pages/Trade";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Team from "./pages/Team";
import Profile from "./pages/Profile";
import Invite from "./pages/Invite";

export default function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected layout */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <div className="page-wrapper">
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="trade" element={<Trade />} />
                <Route path="deposit" element={<Deposit />} />
                <Route path="withdraw" element={<Withdraw />} />
                <Route path="team" element={<Team />} />
                <Route path="profile" element={<Profile />} />
                <Route path="invite" element={<Invite />} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>

              <BottomNavigator />
            </div>
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
