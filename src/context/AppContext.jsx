import { createContext, useContext, useState } from "react";
import { getPlans } from "../api/planApi";
import { getTransactions } from "../api/transactionApi";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [plans, setPlans] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchPlans = async () => {
    setLoading(true);
    try {
      const res = await getPlans();
      setPlans(res.data);
    } finally {
      setLoading(false);
    }
  };

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const res = await getTransactions();
      setTransactions(res.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        plans,
        transactions,
        balance,
        setBalance,
        fetchPlans,
        fetchTransactions,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
