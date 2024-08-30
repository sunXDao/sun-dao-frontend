'use client';

import ConnectWalletSection from "@/components/App/ConnectWalletSection";
import TokenSelect from "@/components/App/TokenSelect";
import Button from "@/components/Button";
import { useState } from "react";
import { IoMdSwap } from "react-icons/io";
import { useAccount } from "wagmi";

export default function SwapSection() {
  const [fromToken, setFromToken] = useState<string>('');
  const [toToken, setToToken] = useState<string>('');
  const { isConnected } = useAccount();

  return (
    <section>
      <div className="w-full flex items-center justify-around gap-3">
        <div className="flex gap-3 justify-between">
          <TokenSelect tokens={["USDC", "USDT", "RWA"]} />
          <input placeholder="0.0" className="w-full h-12 bg-transparent text-white text-lg font-semibold rounded-lg p-4 focus:outline-none border border-primaryColor" />
        </div>
        <IoMdSwap size={25} />
        <div className="flex gap-3">
          <TokenSelect tokens={["USDC", "USDT", "RWA"]} />
          <input placeholder="0.0" className="w-full h-12 bg-transparent text-white text-lg font-semibold rounded-lg p-4 focus:outline-none border border-primaryColor" />
        </div>
      </div>
      <div className="flex justify-center my-5">
        {
          isConnected ?
            <Button variant={true}>Swap</Button>
            :
            <ConnectWalletSection />
        }
      </div>
    </section>
  )
}
