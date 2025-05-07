import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/_components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name | Personal Portfolio",
  description: "Your description here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 pt-28 sm:pt-36 overflow-x-hidden `}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem]  -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] sm:w-[68.75rem] rounded-full blur-[10rem]"></div>
        <div className="bg-[#fbe2e3] absolute top-[-1rem] -z-10 left-[35rem] h-[31.25rem] w-[31.25rem] sm:w-[68.75rem] rounded-full blur-[10rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[5rem]"></div>
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
