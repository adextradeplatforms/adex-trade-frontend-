import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import api from "../api/axios";
import "./Trade.css";

export default function Trade() {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const [showBalance, setShowBalance] = useState(true);

  const plans = [
    { name: "VEXT Robot", profit: "2%", min: "20 USDT", route: "/plans/vext" },
    { name: "Quantum Boost", profit: "2.5%", min: "100 USDT", route: "/plans/quantum" },
    { name: "Alpha Trader", profit: "3%", min: "500 USDT", route: "/plans/alpha" },
  ];

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await api.get("/users/me");

        // ✅ support both response styles
        const data = res.data.user || res.data;

        setBalance(Number(data.balance || 0));
      } catch (err) {
        console.error("Balance fetch error:", err);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="trade-page">
      <div className="trade-header">Trade Plans</div>

      <div className="balance-card">
        <h2>USDT Balance</h2>
        <p>
          {showBalance ? `$${balance.toFixed(2)}` : "****"}
          <button
            className="toggle-btn"
            onClick={() => setShowBalance(!showBalance)}
          >
            {showBalance ? "Hide" : "Show"}
          </button>
        </p>
      </div>

      <div className="plans-container">
        {plans.map((plan) => (
          <div key={plan.name} className="plan-card">
            <h3>{plan.name}</h3>
            <p>Daily Profit: {plan.profit}</p>
            <p>Min Investment: {plan.min}</p>
            <button
              className="plan-btn"
              onClick={() => navigate(plan.route)}
            >
              View Plan
            </button>
          </div>
        ))}
      </div>

      <div className="bottom-nav">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>
        <NavLink to="/trade" className={({ isActive }) => isActive ? "active" : ""}>
          Trade
        </NavLink>
        <NavLink to="/team" className={({ isActive }) => isActive ? "active" : ""}>
          Team
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>
          Me
        </NavLink>
      </div>
    </div>
  );
}
