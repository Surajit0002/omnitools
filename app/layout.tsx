import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OMNITOOLS - Fast, Free, Secure Online Tools",
  description: "Explore hundreds of free online tools for developers, designers, students and professionals. Calculators, converters, text tools and more.",
  verification: {
    google: "AgwD1GdPUNk__PiSa9BMYU64Rp0Y9C7s88ftJqNdj0E"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
          <SpeedInsights />

        </main>
        <Footer />
      </body>
    </html>
  );
}
