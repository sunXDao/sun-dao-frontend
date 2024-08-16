import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sun Dao",
  description: "Get Rewarded for creating solar driven projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins text-white bg-gradient-to-r from-[#0B0B0B] via-[#3D3D3D] to-[#717171]">
        <Toaster />
        {children}
      </body>
    </html>
  );
}
