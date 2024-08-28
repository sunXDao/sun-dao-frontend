'use client'

import Logo from "@/app/assets/SunDaoLogo.svg"
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdQuestionMark } from "react-icons/md";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function AppNavBar() {
  const pathname = usePathname();

  return (
    <nav className='h-full bg-secondaryColor py-10 px-6 justify-between gap-4'>
      <Link href="/">
        <Image src={Logo} alt="Logo" className="-ml-6" />
      </Link>
      <div className="my-14 flex flex-col h-96 justify-between">
        <NavLink to="/app/dashboard" active={pathname === '/app/dashboard'} text="Dashboard">
          <LuLayoutDashboard size={25} className="ml-2" />
        </NavLink>
        <NavLink to="/app/project" active={pathname === '/app/project'} text="Project">
          <AiOutlineFundProjectionScreen size={25} className="ml-2" />
        </NavLink>
      </div>
      <div className="bg-primaryColor h-[0.1px] -mx-6 mb-10">
      </div>
      <NavLink to="/app/faqs" active={pathname === '/app/faqs'} text="FAQs">
        <MdQuestionMark size={25} className="ml-2" />
      </NavLink>
    </nav>
  )
}

function NavLink({ to, active, text, children }: { to: string, active: boolean, text: string, children: React.ReactNode }) {
  return (
    <Link href={to} className={`py-3.5 pl-5 font-medium text-lg flex gap-5 w-full rounded-full ${active ? 'bg-primaryColor text-white' : 'text-[#85A09B]'} items-center hover:bg-primaryColor hover:text-white`}>
      {children}
      <p>
        {text}
      </p>
    </Link>
  )
}

