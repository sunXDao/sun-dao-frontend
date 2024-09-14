'use client'

import TokenInfo from "@/components/App/TokenInfo";
import { getCoinData } from "@/utils/data";
import { useEffect, useState } from 'react';

export default function Livecoinprice() {
  const [ethData, setEthData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  const fetchPrice = async () => {
    try {
      const response = await getCoinData();
      const tokenData = response.data[8519];
      setEthData(tokenData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPrice();
    const intervalId = setInterval(fetchPrice, 180000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className="flex gap-20 items-center">
      <TokenInfo tokenPrice={0.01467} tokenProgressPercentage={0.53} tokenSymbol="SND" />
      {/* <TokenInfo tokenPrice={0.01467} tokenProgressPercentage={0.53} tokenSymbol="SVL" /> */}
      {
        ethData ?
          <TokenInfo
            tokenPrice={ethData?.quote?.USD?.price.toFixed(2)}
            tokenProgressPercentage={ethData?.quote?.USD?.percent_change_24h.toFixed(2)}
            tokenSymbol={ethData?.symbol}
          /> : <p>Loading...</p>
      }
    </section>
  )
}
