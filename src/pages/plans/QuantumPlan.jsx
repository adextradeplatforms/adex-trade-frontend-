import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import "./Plan.css";

export default function QuantumPlan() {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const plan = {
    name: "Quantum Boost",
    dailyProfit: 2.5, // %
    minInvestment: 100,
  };

  // Fetch user balance
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await api.get("/user/me");
        setBalance(res.data.balance);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBalance();
  }, []);

  const handleInvest = async () => {
    if (!amount || Number(amount) < plan.minInvestment) {
      return alert(`Minimum investment is ${plan.minInvestment} USDT`);
    }

    setLoading(true);
    try {
      await api.post("/investments", {
        plan: plan.name,
        amount: Number(amount),
      });
      alert("Investment successful!");
      setAmount("");
      const res = await api.get("/user/me");
      setBalance(res.data.balance); // refresh balance
    } catch (err) {
      console.error(err);
      alert("Investment failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="plan-page">
      <h1>{plan.name}</h1>

      <div className="balance-section">
        <span>Balance: </span>
        <span>${balance.toFixed(2)}</span>
      </div>

      <div className="plan-info">
        <p>Daily Profit: {plan.dailyProfit}%</p>
        <p>Minimum Investment: {plan.minInvestment} USDT</p>
      </div>

      <div className="invest-section">
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleInvest} disabled={loading}>
          {loading ? "Processing..." : "Start Plan"}
        </button>
      </div>

      <div className="bottom-nav">
        <button onClick={() => navigate("/trade")}>Back to Trade</button>
      </div>
    </div>
  );
}
