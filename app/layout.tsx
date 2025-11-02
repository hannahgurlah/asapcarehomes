import Header from "@/components/Header";
import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Plus_Jakarta_Sans,
  Poppins,
  Urbanist,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["700"],
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  weight: ["400"],
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["500"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ASAP Care Homes Inc. - Quality Care for Your Loved Ones",
  description:
    "Professional care home services providing quality care and support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${plusJakartaSans.variable} ${urbanist.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
