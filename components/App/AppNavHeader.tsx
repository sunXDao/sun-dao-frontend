import { ConnectBtn } from "./ConnectButton";

export default function AppNavHeader() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl">
        <span className="font-medium">SolarCoin TVL: </span>
        <span className="text-primaryColor font-semibold">$87,236.01</span>
      </h1>
      <div className="flex gap-5">
        <ConnectBtn />
      </div>
    </div>
  )
}
