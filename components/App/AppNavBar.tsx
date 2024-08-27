'use client'

import Logo from "@/app/assets/SunDaoLogo.svg"
import Properties from "@/app/assets/Vector.svg"

import { MdSwapCalls } from "react-icons/md";
import { MdWallet } from "react-icons/md";
import { MdQuestionMark } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function AppNavBar() {
  const pathname = usePathname();

  return (
    <nav className='h-full bg-secondaryColor py-10 px-6 flex flex-col justify-between gap-4'>
      <Link href="/">
        <Image src={Logo} alt="Logo" className="-ml-6" />
      </Link>
      <NavLink to="/app/my-portfolio" active={pathname === '/app/my-portfolio'} text="My Portfolio">
        <MdWallet size={25} className="ml-2" />
      </NavLink>
      <NavLink to="/app/properties" active={pathname === '/app/properties'} text="Properties">
        <Image src={Properties} alt="Icon" className="ml-2"/>
      </NavLink>
      <NavLink to="/app/swap" active={pathname === '/app/swap'} text="Swap">
        <MdSwapCalls size={25} className="ml-2" />
      </NavLink>
      <NavLink to="/app/history" active={pathname === '/app/history'} text="History">
        <FaRegClock size={25} className="ml-2" />
      </NavLink>
      <div className="bg-primaryColor h-[0.1px] -mx-6 mb-5">
      </div>
      <NavLink to="/app/faqs" active={pathname === '/app/faqs'} text="FAQs">
        <MdQuestionMark size={25} className="ml-2" />
      </NavLink>
    </nav>
  )
}

function NavLink({ to, active, text, children }: { to: string, active: boolean, text: string, children: React.ReactNode }) {
  return (
    <Link href={to} className={`py-4 pl-5 font-medium text-xl flex gap-5 w-full rounded-full ${active ? 'bg-primaryColor text-white' : 'text-[#85A09B]'} items-center hover:bg-primaryColor hover:text-white`}>
      {children}
      <p>
        {text}
      </p>
    </Link>
  )
}

