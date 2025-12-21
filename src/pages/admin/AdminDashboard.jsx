import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function AdminDashboard() {
  const [txs, setTxs] = useState([]);

  useEffect(() => {
    axios.get("/admin/transactions").then(res => setTxs(res.data));
  }, []);

  const approve = async (id) => {
    await axios.put(`/admin/transaction/${id}/approve`);
    alert("Approved");
  };

  return (
    <DashboardLayout>
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>

      {txs.map(tx => (
        <div key={tx._id} className="bg-white p-4 mb-3 flex justify-between">
          <span>{tx.type} - ${tx.amount}</span>
          <button
            onClick={() => approve(tx._id)}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            Approve
          </button>
        </div>
      ))}
    </DashboardLayout>
  );
}
