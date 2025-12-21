// src/pages/Withdraw.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import "./Withdraw.css";

export default function Withdraw() {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [wallet, setWallet] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showBalance, setShowBalance] = useState(true);

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

  const handleWithdraw = async () => {
    if (!amount || !wallet) {
      setMessage("Please fill all fields");
      return;
    }
    const amt = parseFloat(amount);
    if (amt < 10) {
      setMessage("Minimum withdrawal is $10");
      return;
    }
    if (amt > balance) {
      setMessage("Insufficient balance");
      return;
    }

    // Check time for withdrawal (08:00 - 20:00 UTC)
    const nowUTC = new Date();
    const hours = nowUTC.getUTCHours();
    if (hours < 8 || hours >= 20) {
      setMessage("Withdrawals allowed only from 08:00 - 20:00 UTC");
      return;
    }

    setLoading(true);
    try {
      const fee = (amt * 0.05).toFixed(2); // 5% fee
      const res = await api.post("/withdraw", {
        amount: amt,
        wallet,
        fee,
      });
      setMessage(res.data.message || "Withdrawal request sent successfully!");
      setAmount("");
      setWallet("");
      setBalance(balance - amt);
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Something went wrong");
    }
    setLoading(false);
  };

  return (
    <div className="withdraw-page">
      <h2>Withdraw Funds</h2>

      <div className="balance-card">
        <h3>Balance</h3>
        <p>
          {showBalance ? `$${balance.toFixed(2)}` : "****"}{" "}
          <button onClick={() => setShowBalance(!showBalance)}>
            {showBalance ? "Hide" : "Show"}
          </button>
        </p>
      </div>

      <div className="withdraw-form">
        <input
          type="number"
          placeholder="Amount in USD"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="BEP20 Wallet Address"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
        />
        <button onClick={handleWithdraw} disabled={loading}>
          {loading ? "Processing..." : "Withdraw"}
        </button>
        {message && <p className="message">{message}</p>}
      </div>

      <div className="withdraw-info">
        <p>🌐 Minimum withdrawal: $10</p>
        <p>🌐 Withdrawal fee: BEP20 5%</p>
        <p>🕓 Withdrawal time: 08:00 - 20:00 UTC</p>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        <button onClick={() => navigate("/trade")}>Trade</button>
        <button onClick={() => navigate("/team")}>Team</button>
        <button onClick={() => navigate("/profile")}>Profile</button>
      </div>
    </div>
  );
}
