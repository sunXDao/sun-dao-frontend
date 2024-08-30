import { Metadata } from "next";
import Livecoinprice from "./Livecoinprice";
import SwapSection from "./SwapSection";

export const metadata: Metadata = {
  title: "My Dashboard | Sun Dao",
  description: "My Dashboard",
};

export default async function page() {
  return (
    <main className="pt-10 space-y-4">
      <section>
        <div className="text-center">
          <h1 className="text-5xl mb-3 font-medium">Solar Yield Farming</h1>
          <p className="text-lg">Earning through Micro-grid Tokenization</p>
        </div>
      </section>
      <Livecoinprice />
      <SwapSection />
    </main>
  )
}
