'use client';

import ConnectWalletSection from "@/components/App/ConnectWalletSection";
import TokenSelect from "@/components/App/TokenSelect";
import Button from "@/components/Button";
import { contractABI, contractAddress } from "@/utils/contract-details";
import { ChangeEvent, useEffect, useState } from "react";
import { IoMdSwap } from "react-icons/io";
import { useAccount, useWriteContract } from "wagmi";
import { readContract } from '@wagmi/core'
import { config } from "@/utils/config";
import toast from "react-hot-toast";
import { parseEther } from "viem";
import { on } from "events";


const tokens = [
  {
    name: "TNS",
    symbol: "TNS",
    contractAddress: "0x435bA31fEA5F67D915053ddCaeE187Dee1fC7ea8"
  }
]

export default function SwapSection() {
  const [fromTokenInfo, setFromTokenInfo] = useState<any>('');
  const [fromTokenAmount, setFromTokenAmount] = useState<string>('');
  const [toTokenAmount, setToTokenAmount] = useState<any>('');
  const [isSwaping, setIsSwaping] = useState<boolean>(false);
  const { isConnected } = useAccount();
  const { writeContractAsync } = useWriteContract();

  const handleApprove = async () => {
    const result = await writeContractAsync({
      address: fromTokenInfo.contractAddress,
      abi: contractABI,
      functionName: "approve",
      args: [contractAddress, parseEther(fromTokenAmount)],
    })
    return result;
  }

  const handleSwap = async () => {
    if (!fromTokenInfo || !fromTokenAmount) {
      toast.error("Please select a token or enter an amount")
      return
    }
    if (Number(fromTokenAmount) === 0) {
      toast.error("Amount should be greater than 0")
      return
    }
    setIsSwaping(true)
    try {
      const approveRes = await handleApprove();
      if (approveRes) {
        const result = await writeContractAsync({
          address: contractAddress,
          abi: contractABI,
          functionName: "depositToMint",
          args: [parseEther(fromTokenAmount)],
        })
        if (result) {
          toast.success("Deposit successful")
          setIsSwaping(false)
          setFromTokenAmount('')
        }
      }
    } catch (error) {
      toast.error("Deposit failed")
      setIsSwaping(false)
      setFromTokenAmount('')
    }
  }
  useEffect(() => {
    const getMintAmount = async () => {
      const result = await readContract(config, {
        address: contractAddress,
        abi: contractABI,
        functionName: "getMintAmount",
        args: [fromTokenAmount],
      })
      setToTokenAmount(Number(result))
    }
    getMintAmount()
  }, [fromTokenAmount])

  return (
    <section>
      {
        isConnected ?
          <>
            <div className="w-full flex items-center justify-around gap-3">
              <div className="w-2/5 flex gap-3 justify-between">
                <TokenSelect tokens={tokens} setCurrentToken={setFromTokenInfo} currentToken={fromTokenInfo} />
                <input placeholder="0.0" type="number" onChange={(e: ChangeEvent<HTMLInputElement>) => setFromTokenAmount(e.target.value)} value={fromTokenAmount} min={1} className="w-full bg-transparent text-white text-lg font-semibold rounded-lg px-3 focus:outline-none border border-primaryColor" />
              </div>
              <IoMdSwap size={25} />
              <div className="w-2/5 flex gap-3">
                <div className="w-full bg-transparent p-3 rounded-xl border border-primaryColor">
                  <span>SND</span>
                </div>
                <div className="w-full bg-transparent p-3 rounded-xl border border-primaryColor">
                  <span>{toTokenAmount}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center my-5">
              <Button onClick={handleSwap} disabled={isSwaping} variant={true}>{isSwaping ? "Depositing" : "Deposit"}</Button>
            </div>
          </>
          :
          <ConnectWalletSection />
      }
    </section>
  )
}
