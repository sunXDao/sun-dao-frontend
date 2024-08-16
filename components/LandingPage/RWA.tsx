import { FaDiscord } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BiLogoTelegram } from 'react-icons/bi'
import Image1 from "@/app/assets//image 20.svg";
import Image from 'next/image';

export default function RWA() {
  return (
    <section className="relative bg-[url('/RWABgImg.svg')] h-[622px] bg-no-repeat bg-cover flex flex-col justify-center gap-10 p-10">
      <FaXTwitter className='w-7 h-7' />
      <FaDiscord className='w-7 h-7' />
      <BiLogoTelegram className='w-7 h-7' />
      <Image src={Image1} alt="crypto icon" className="absolute top-1/2 left-72 w-10 h-10" />
    </section>
  )
}
