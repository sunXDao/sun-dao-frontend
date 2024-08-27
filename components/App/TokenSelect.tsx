'use client'

import { useState } from "react"
import { BiChevronDown } from "react-icons/bi";

export default function TokenSelect({ tokens }: { tokens: string[] }) {
  const [selectedToken, setSelectedToken] = useState<string>('');
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const handleSelect = (token: string) => {
    setSelectedToken(token);
    handleToggleOptions();
  }
  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  }

  return (
    <div className="relative w-48">
      <div onClick={handleToggleOptions} className="bg-transparent flex gap-3 items-center justify-between rounded-xl p-3 h-full border border-primaryColor focus:outline-none">
        <BiChevronDown size={25} className={`transition-all ease-in-out ${showOptions ? 'rotate-180' : 'rotate-0'} duration-300`} />
        <p>
          {selectedToken || 'Select an option'}
        </p>
      </div>
      <div className={`w-full h-full ${showOptions ? "absolute" : "hidden"} flex flex-col gap-4 top-20`}>
        {tokens.map((token) => (
          <button key={token} onClick={() => handleSelect(token)} className="p-3 w-full flex gap-3 justify-between border rounded-xl border-primaryColor focus:outline-none">
            <BiChevronDown size={25} className="text-primaryColor" />
            {token}
          </button>
        ))}
      </div>
    </div>
  )
}
