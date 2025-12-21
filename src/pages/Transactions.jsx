import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Transactions() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/transactions/my").then(res => setData(res.data));
  }, []);

  return (
    <DashboardLayout>
      <h2 className="text-xl font-bold mb-4">Transaction History</h2>

      <div className="bg-white rounded shadow">
        {data.map(tx => (
          <div
            key={tx._id}
            className="border-b p-4 flex justify-between"
          >
            <span>{tx.type}</span>
            <span>${tx.amount}</span>
            <span className={tx.status === "approved" ? "text-green-600" : "text-yellow-600"}>
              {tx.status}
            </span>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
