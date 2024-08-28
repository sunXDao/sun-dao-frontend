'use client'

import TokenInfo from "@/components/App/TokenInfo";
import { getCoinData } from "@/utils/data";
import { useEffect, useState } from 'react';

export default function Livecoinprice() {
  const [ethData, setEthData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  const fetchPrice = async () => {
    try {
      const response = await getCoinData()
      const eth = response.data.find((coin: any) => coin.symbol === 'ETH');
      console.log(eth);
      setEthData(eth);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPrice();
    const intervalId = setInterval(fetchPrice, 10000); // Fetch every 30 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  return (
    <section className="flex gap-20 items-center">
      <TokenInfo tokenPrice={0.01467} tokenProgress="gain" tokenProgressPercentage={0.53} tokenSymbol="SVL" />
      <TokenInfo tokenPrice={ethData?.quote?.USD?.price.toFixed(2)} tokenProgress="loss" tokenProgressPercentage={ethData?.quote?.USD?.percent_change_24h.toFixed(2)} tokenSymbol={ethData?.symbol} />
    </section>
  )
}
