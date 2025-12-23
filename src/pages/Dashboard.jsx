import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../api/axios";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await api.get("/dashboard");

        // ✅ support both { user: {...} } and {...}
        const data = res.data.user || res.data;

        setUser(data);
      } catch (err) {
        console.error("Dashboard error:", err);
        if (err.response?.status === 401) navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [navigate]);

  if (loading) {
    return <div className="loading-text">Loading dashboard...</div>;
  }

  if (!user) {
    return <div className="loading-text">Failed to load dashboard</div>;
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">Create Future</div>

      <div className="balance-card">
        <h3>Total Balance</h3>
        <p className="balance-amount">
          ${Number(user.balance || 0).toFixed(2)}
        </p>
      </div>

      {user.referrer && (
        <div className="referrer-card">
          <h4>Referred by:</h4>
          <p>
            {user.referrer.username} ({user.referrer.email})
          </p>
        </div>
      )}

      <div className="dashboard-buttons">
        <button
          className="dashboard-button recharge"
          onClick={() => navigate("/deposit")}
        >
          💰 Recharge
        </button>

        <button
          className="dashboard-button withdraw"
          onClick={() => navigate("/withdraw")}
        >
          🏧 Withdraw
        </button>
      </div>

      <div className="invite-section" onClick={() => navigate("/invite")}>
        🎁 Invite Friends
        <span>Earn together</span>
      </div>

      <div className="transactions-card">
        <h3>Transactions</h3>

        {!user.withdrawals || user.withdrawals.length === 0 ? (
          <p>No transactions yet.</p>
        ) : (
          user.withdrawals.map((tx) => (
            <div className="transaction-item" key={tx._id}>
              <span>{tx.type}</span>
              <span>${Number(tx.amount).toFixed(2)}</span>
              <span>{new Date(tx.createdAt).toLocaleDateString()}</span>
            </div>
          ))
        )}
      </div>

      <div className="crypto-card">
        <h3>Markets</h3>

        {user.cryptoPrices ? (
          Object.entries(user.cryptoPrices).map(([coin, price]) => (
            <div className="crypto-item" key={coin}>
              <span>{coin}</span>
              <span>${Number(price).toFixed(2)}</span>
            </div>
          ))
        ) : (
          <p className="loading-text">Loading prices...</p>
        )}
      </div>

      <div className="bottom-nav">
        <NavLink to="/dashboard">Home</NavLink>
        <NavLink to="/trade">Trade</NavLink>
        <NavLink to="/team">Team</NavLink>
        <NavLink to="/profile">Me</NavLink>
      </div>
    </div>
  );
}
