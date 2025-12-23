import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import BottomNavigator from "./components/BottomNavigator";

// Auth Pages
import Login from "./pages/Login";
import Register from "./pages/Register";

// Main App Pages
import Dashboard from "./pages/Dashboard";
import Trade from "./pages/Trade";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Team from "./pages/Team";
import Profile from "./pages/Profile";
import Invite from "./pages/Invite";

// Trade Plans
import VextPlan from "./pages/plans/VextPlan";
import QuantumPlan from "./pages/plans/QuantumPlan";
import AlphaPlan from "./pages/plans/AlphaPlan";

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected App Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <div className="page-wrapper">
              <Routes>
                {/* Dashboard & main pages */}
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="trade" element={<Trade />} />
                <Route path="deposit" element={<Deposit />} />
                <Route path="withdraw" element={<Withdraw />} />
                <Route path="team" element={<Team />} />
                <Route path="profile" element={<Profile />} />
                <Route path="invite" element={<Invite />} />

                {/* Plans */}
                <Route path="plans/vext" element={<VextPlan />} />
                <Route path="plans/quantum" element={<QuantumPlan />} />
                <Route path="plans/alpha" element={<AlphaPlan />} />

                {/* Fallback inside protected */}
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>

              {/* Bottom Navigation */}
              <BottomNavigator />
            </div>
          </ProtectedRoute>
        }
      />

      {/* Fallback for unknown routes */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
