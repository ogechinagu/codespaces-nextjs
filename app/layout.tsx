import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./components/navigation/Header";
import Sidenav from "./components/navigation/Sidenav";

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Ogechi Ikwunagu's Portfolio",
  description: "Welcome to Ogechi Ikwunagu's digital portfolio, where each website and web application is meticulously designed, SEO-optimized, and created with love and the user's experience in mind.",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} overflow-x-hidden`}>
        <Header />
        <Sidenav />
        {children}
      </body>
    </html>
  );
}
