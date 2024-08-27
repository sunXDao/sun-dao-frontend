import { ConnectBtn } from "./ConnectButton";
import TokenSelect from "./TokenSelect";

export default function AppNavHeader({ title }: { title: string }) {
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex gap-5">
        <TokenSelect tokens={['ETH', 'BNB', 'MATIC']} />
        <ConnectBtn />
      </div>
    </div>
  )
}
