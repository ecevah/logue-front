"use client";
import "../styles/main.scss";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTop from "react-scroll-up";
import ProgressBar from "next-nprogress-bar";
import ScrollUp from "@/components/main/scrollUp";

const poppins = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  useEffect(() => {
    AOS.init();
    import("preline");
  }, []);
  return (
    <html lang="tr">
      <body
        className={
          poppins.className +
          ` font-sans antialiased text-gray-600 min-h-full flex flex-col [overflow-anchor:none]`
        }
      >
        <ProgressBar
          height="4px"
          color="#0F172A"
          options={{ showSpinner: true }}
          shallowRouting
          appDirectory
        />
        <Header />
        {children}
        <ScrollToTop showUnder={160}>
          <ScrollUp/>
        </ScrollToTop>
        <Footer />
      </body>
    </html>
  );
}
