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
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
              <BottomNavigator />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trade"
          element={
            <ProtectedRoute>
              <Trade />
              <BottomNavigator />
            </ProtectedRoute>
          }
        />
        <Route
          path="/deposit"
          element={
            <ProtectedRoute>
              <Deposit />
              <BottomNavigator />
            </ProtectedRoute>
          }
        />
        <Route
          path="/withdraw"
          element={
            <ProtectedRoute>
              <Withdraw />
              <BottomNavigator />
            </ProtectedRoute>
          }
        />
        <Route
          path="/team"
          element={
            <ProtectedRoute>
              <Team />
              <BottomNavigator />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
              <BottomNavigator />
            </ProtectedRoute>
          }
        />
        <Route
          path="/invite"
          element={
            <ProtectedRoute>
              <Invite />
              <BottomNavigator />
            </ProtectedRoute>
          }
        />

        {/* Trade Plans */}
        <Route
          path="/plans/vext"
          element={
            <ProtectedRoute>
              <VextPlan />
              <BottomNavigator />
            </ProtectedRoute>
          }
        />
        <Route
          path="/plans/quantum"
          element={
            <ProtectedRoute>
              <QuantumPlan />
              <BottomNavigator />
            </ProtectedRoute>
          }
        />
        <Route
          path="/plans/alpha"
          element={
            <ProtectedRoute>
              <AlphaPlan />
              <BottomNavigator />
            </ProtectedRoute>
          }
        />

        {/* Default Redirects */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}
