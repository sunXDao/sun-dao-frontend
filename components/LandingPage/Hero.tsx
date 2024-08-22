import Image from "next/image";
import Button from "../Button";
import Image1 from "@/app/assets/image 13.svg";
import Image2 from "@/app/assets/image 14.svg";
import Image3 from "@/app/assets/image 16.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-4/5 mx-auto flex flex-col items-center py-20">
      <div className="mb-60 text-center">
        <h2 className="font-bold text-[55px] leading-[70px]">Power the Future with <br /> Decentralized Solar Investments</h2>
        <p className="font-medium text-xl leading-9">Join SunDAO to own, profit from, and scale sustainable <br /> energy projects globally.</p>
      </div>
      <div>
        <Image src={Image3} alt="crypto icon" className="absolute bottom-56 right-[750px] w-20 h-20" />
        <Image src={Image2} alt="crypto icon" className="absolute bottom-44 right-[700px] w-14 h-14" />
        <Image src={Image1} alt="crypto icon" className="absolute bottom-32 right-[600px] w-16 h-16" />
      </div>
      <div className="flex gap-40">
        <Link href="/app/swap">
          <Button variant={true}>Launch app</Button>
        </Link>
        <Button variant={false}>Read Docs</Button>
      </div>
      <div>
        <Image src={Image3} alt="crypto icon" className="absolute bottom-10 right-44 w-20 h-20" />
        <Image src={Image2} alt="crypto icon" className="absolute -bottom-5 right-28 w-14 h-14" />
        <Image src={Image1} alt="crypto icon" className="absolute -bottom-14 right-10 w-16 h-16" />
      </div>
    </section>
  )
}
