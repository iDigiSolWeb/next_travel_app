import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel ",
  description: "Travel UI/UX App for Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Traveler</title>
        <link rel="icon" type="image/x-icon" href=".//favicon.ico"/>
</head>
      <body >
        <Navbar/>
       
        <main className="relative overflow-hidden">{children}</main>
        
        <Footer/>
        </body>
    </html>
  );
}
