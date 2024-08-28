// import AppNavHeader from "@/components/App/AppNavHeader";
// import TokenInfo from "@/components/App/TokenInfo";
import { Metadata } from "next";
import Livecoinprice from "./Livecoinprice";

export const metadata: Metadata = {
  title: "My Dashobard | Sun Dao",
  description: "My Dashobard",
};

export default async function page() {
  // const res = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
  //   headers: {
  //     'X-CMC_PRO_API_KEY': '3d010422-112a-4949-80f6-ceaa7661eaf4',
  //   },
  // });

  // const data = await res.json();
  // console.log(data);
  return (
    <main className="pt-10 space-y-4">
      <section>
        <div className="text-center">
          <h1 className="text-5xl mb-3 font-medium">Solar Yield Farming</h1>
          <p className="text-lg">Earning through Micro-grid Tokenization</p>
        </div>
      </section>
      <Livecoinprice />
    </main>
  )
}
