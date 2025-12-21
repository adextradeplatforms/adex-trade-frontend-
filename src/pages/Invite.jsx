import React, { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import axios from "axios";

export default function Invite() {
  const [referralCode, setReferralCode] = useState("");

  useEffect(() => {
    const fetchCode = async () => {
      const res = await axios.get("/api/user/me");
      setReferralCode(res.data.referralCode);
    };
    fetchCode();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Invite</h1>
        <div className="bg-white p-4 rounded-lg shadow">
          <p>Share this referral code to invite friends:</p>
          <div className="bg-gray-100 p-2 rounded my-2">
            <code>{referralCode}</code>
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => navigator.clipboard.writeText(referralCode)}
          >
            Copy Code
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
