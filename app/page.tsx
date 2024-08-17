import Footer from "@/components/Footer";
import FAQs from "@/components/LandingPage/FAQs";
import Hero from "@/components/LandingPage/Hero";
import ISO from "@/components/LandingPage/ISO";
import RWA from "@/components/LandingPage/RWA";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/HeroBgImg.svg')] h-[894px] bg-no-repeat bg-cover">
        <Navbar />
        <Hero />
      </div>
      <RWA />
      <ISO />
      <FAQs/>
      <Footer />
    </main>
  );
}
