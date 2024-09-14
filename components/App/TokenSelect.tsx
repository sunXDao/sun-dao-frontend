'use client'

import { useState } from "react"
import { BiChevronDown } from "react-icons/bi";

export interface TokenProp {
  name: string;
  symbol: string;
  contractAddress: string;
}
export interface TokenSelectProps {
  tokens: TokenProp[];
  currentToken: TokenProp;
  setCurrentToken: (newValue: TokenProp) => void;
}
export default function TokenSelect({ tokens, currentToken, setCurrentToken }: TokenSelectProps) {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleSelect = (token: TokenProp) => {
    setCurrentToken(token);
    handleToggleOptions();
  }
  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  }

  return (
    <div className="relative w-full">
      <div onClick={handleToggleOptions} className="bg-transparent flex gap-3 items-center justify-between rounded-xl p-3 border border-primaryColor focus:outline-none">
        <BiChevronDown size={25} className={`transition-all ease-in-out ${showOptions ? 'rotate-180' : 'rotate-0'} duration-300`} />
        <p>
          {currentToken.symbol || 'Select an option'}
        </p>
      </div>
      <div className={`w-full h-full ${showOptions ? "absolute" : "hidden"} flex flex-col top-12`}>
        {tokens.map((token) => (
          <button key={token.symbol} onClick={() => handleSelect(token)} className="p-3 w-full flex gap-3 justify-between border rounded-xl border-primaryColor focus:outline-none">
            <BiChevronDown size={25} className="text-primaryColor" />
            {token.symbol}
          </button>
        ))}
      </div>
    </div>
  )
}
