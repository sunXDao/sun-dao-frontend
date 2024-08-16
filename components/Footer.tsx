import Image from "next/image";
import Logo from "@/app/assets/SunDaoLogo.svg"
import { FaDiscord } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BiLogoTelegram } from 'react-icons/bi'

export default function Footer() {
  return (
    <nav className="px-10 py-2 flex items-center justify-between">
      <Image src={Logo} alt="Logo" className="w-52 h-20" />
      <div className="flex gap-20">
        <FaXTwitter className='w-6 h-6' />
        <FaDiscord className='w-6 h-6' />
        <BiLogoTelegram className='w-6 h-6' />
      </div>
      <p>
        © 2024 SunDAO
      </p>
    </nav>
  )
}
