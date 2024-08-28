import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export default function TokenInfo({ tokenPrice, tokenSymbol, tokenProgress, tokenProgressPercentage }: { tokenPrice: number, tokenSymbol: string, tokenProgress: 'gain' | 'loss', tokenProgressPercentage: number }) {
  return (
    <div className="space-y-2">
      <h1 className="text-lg">
        <span className="font-medium">{tokenSymbol}: </span>
        <span className="font-semibold">${tokenPrice}</span>
      </h1>
      <p className={`text-lg flex items-center gap-1 ${tokenProgress === 'gain' ? 'text-green-500' : 'text-red-500'}`}>
        {tokenProgress === 'gain' ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        {tokenProgressPercentage}% (24h)
      </p>
    </div>
  )
}
