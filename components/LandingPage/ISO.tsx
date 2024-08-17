import Image, { StaticImageData } from "next/image"
import Image1 from "@/app/assets/image 10-1.svg";
import Image2 from "@/app/assets/image 10.svg";
import Image3 from "@/app/assets/Group 3.svg";

export default function ISO() {
  return (
    <section className="my-20 p-20 text-center  bg-[url('/ISOBgImg.svg')] bg-center">
      <h2 className="text-5xl font-semibold">
        Introducing Solar On - chain (ISO)
      </h2>
      <div className="w-10/12 mx-auto mt-24 mb-40 flex gap-8">
        <FeatureCard title="SunDAO Liquidity" description="Purchase SunDAO tokens, contribute to the pool, and invest in solar projects worldwide" imgUrl={Image2} />
        <FeatureCard title="Grow Your Portfolio with SunDAO" description="SunDAO acquires yield-generating commercial solar projects, delivering value directly back to token holders." imgUrl={Image3} />
        <FeatureCard title="Transact Borderless with Ease" description="Access global solar projects as easily as trading tokens. Say goodbye to paperwork—blockchain makes it seamless." imgUrl={Image1} />
      </div>
    </section>
  )
}

function FeatureCard({ title, description, imgUrl }: { title: string, description: string, imgUrl: StaticImageData }) {
  return (
    <div className="flex-1 flex flex-col items-center space-y-4">
      <Image src={imgUrl} alt="feature image" />
      <h2 className="font-semibold text-xl">{title}</h2>
      <p className="w-3/4">{description}</p>
    </div>
  )
}