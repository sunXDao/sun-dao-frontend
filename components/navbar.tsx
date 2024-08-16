import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/SunDaoLogo.svg"
import PrimaryButton from "./primarybtn";

export default function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Whitepaper", href: "/" },
    { name: "Help centre", href: "/help-centre" }
  ]
  return (
    <nav className="px-20 py-5 flex items-center justify-between">
      <Link href="/">
        <Image src={Logo} alt="Logo" className="w-60 h-24"/>
      </Link>
      <div className="flex gap-10">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="font-semibold text-lg hover:text-[#00B894]">{link.name}</Link>
        ))}
      </div>
      <Link href="/">
        <PrimaryButton variant={true}>Launch app</PrimaryButton>
      </Link>
    </nav>
  )
}
