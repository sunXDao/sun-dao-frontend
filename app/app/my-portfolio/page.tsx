import AppNavHeader from "@/components/App/AppNavHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio | Sun Dao",
  description: "My Portfolio",
};

export default function page() {
  return (
    <main className="py-10 px-8">
      <AppNavHeader title="My Portfolio"/>
    </main>
  )
}
