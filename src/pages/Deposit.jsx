import React, { useEffect, useState } from "react";
import api from "../api/axios";
import "./Deposit.css";

export default function Deposit() {
  const [wallet, setWallet] = useState(null);
  const [balance, setBalance] = useState(0);
  const [deposits, setDeposits] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch deposit data
  const loadDepositData = async () => {
    try {
      setLoading(true);

      // 1️⃣ Platform wallet
      const walletRes = await api.get("/wallets/platform");
      setWallet(walletRes.data);

      // 2️⃣ User balance
      const userRes = await api.get("/users/me");
      setBalance(userRes.data.balance || 0);

      // 3️⃣ Deposit transactions
      const txRes = await api.get("/transactions?type=deposit");
      setDeposits(txRes.data || []);

      setError("");
    } catch (err) {
      console.error("Deposit page error:", err);
      setError("Failed to load deposit data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDepositData();

    // Optional: refresh deposits every 30 seconds
    const interval = setInterval(loadDepositData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <div className="deposit-error">{error}</div>;
  }

  if (loading || !wallet) {
    return <div className="deposit-loading">Loading deposit info...</div>;
  }

  return (
    <div className="deposit-page">
      <h2>Deposit USDT (BEP20)</h2>

      {/* User Balance */}
      <div className="deposit-balance">
        <span>Balance</span>
        <strong>${balance.toFixed(2)}</strong>
      </div>

      {/* Platform Wallet */}
      <div className="deposit-card">
        <p>Send USDT (BEP20) to the following address:</p>
        <div className="deposit-address">{wallet.address || "Not available"}</div>
        <p className="deposit-meta">
          Minimum: ${wallet.minDeposit || 10} {/* fallback minDeposit */}
        </p>
      </div>

      {/* Deposit History */}
      <div className="deposit-history">
        <h3>Deposit History</h3>
        {deposits.length === 0 ? (
          <p className="empty">No deposits yet</p>
        ) : (
          deposits.map((d) => (
            <div key={d._id} className={`tx ${d.status}`}>
              <span>${d.amount.toFixed(2)}</span>
              <span>{d.status}</span>
              <span>{new Date(d.createdAt).toLocaleString()}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
