import { useEffect, useState } from "react";

export default function useCryptoPrices() {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,tether&vs_currencies=usd"
      );
      const data = await res.json();

      setPrices({
        BTC: data.bitcoin.usd,
        ETH: data.ethereum.usd,
        BNB: data.binancecoin.usd,
        USDT: data.tether.usd,
      });
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 15000);
    return () => clearInterval(interval);
  }, []);

  return prices;
}
