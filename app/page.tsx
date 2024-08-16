import Hero from "@/components/LandingPage/Hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/HeroBgImg.svg')] h-[894px]">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
