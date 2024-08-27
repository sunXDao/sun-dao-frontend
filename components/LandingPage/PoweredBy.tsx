import Marquee from 'react-fast-marquee'
import Image from "next/image";
import Image1 from '@/app/assets/Frame 82.svg'
import Image2 from '@/app/assets/Frame 83.svg'
import Image3 from '@/app/assets/Frame 84.svg'
import Image4 from '@/app/assets/Frame 85.svg'
import Image5 from '@/app/assets/Frame 98.svg'

export default function PoweredBy() {
  return (
    <section className="my-20 px-20 text-center space-y-10">
      <h2 className="w-fit text-5xl font-bold mx-auto bg-clip-text text-transparent bg-gradient-to-r from-[#E86313] to-[#0049E6]">
        POWERED BY
      </h2>
      <section className="flex justify-center items-center">
        <div className="rounded-2xl">
          <Marquee className="border-transparent overflow-hidden grid">
            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <Image src={Image1} alt="Partner Logo" className="h-52 w-80" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <Image src={Image2} alt="Partner Logo" className="h-52 w-80" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <Image src={Image3} alt="Partner Logo" className="h-52 w-80" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <Image src={Image4} alt="Partner Logo" className="h-52 w-80" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <Image src={Image5} alt="Partner Logo" className="h-52 w-80" />
            </div>

          </Marquee>
        </div>
      </section>
    </section>
  )
}


