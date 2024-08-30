import { ConnectBtn } from "./ConnectButton";
import { MdOutlineWallet } from "react-icons/md";

export default function ConnectWalletSection() {
  return (
    <div className="w-fit py-10 px-36 mx-auto flex flex-col items-center space-y-2.5 bg-[#292929] rounded-lg">
      <div className="h-16 w-16 rounded-full p-4 flex items-center justify-center border border-primaryColor text-primaryColor">
        <MdOutlineWallet size={25} />
      </div>
      <h1 className="font-semibold">No wallet connected</h1>
      <p className="text-center text-sm text-[#B9B9B9]">Get started by connecting your wallet.</p>
      <ConnectBtn fill={false}/>
    </div>
  )
}
