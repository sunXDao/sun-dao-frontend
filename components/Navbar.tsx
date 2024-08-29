import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/SunDaoLogo.svg"
import Button from "./Button";

export default function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Whitepaper", href: "/" },
    { name: "Help centre", href: "/" }
  ]
  return (
    <nav className="px-20 py-8 flex items-center justify-between">
      <Link href="/">
        <Image src={Logo} alt="Logo" className="w-60 h-24" />
      </Link>
      <div className="flex gap-10">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="font-semibold text-lg hover:text-primaryColor">{link.name}</Link>
        ))}
      </div>
      <Link href="/app/dashboard">
        <Button variant={true}>Launch app</Button>
      </Link>
    </nav>
  )
}
