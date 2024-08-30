import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import NavBarResposive from '@/app/components/navigation/NavBarResposive'
import Footer from '@/app/components/footer/Footer' 
import "./globals.css";

const barlow_Condensed = Barlow_Condensed({
    weight:["300","400","500","600","700","800"],
   subsets: ["latin"]
   });

export const metadata: Metadata = {
  title: "Burger | Fast Food",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow_Condensed.className}>
        <NavBarResposive/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
