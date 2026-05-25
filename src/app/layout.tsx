import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif, Playfair_Display, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Dobrev MasterClass",
  description: "A masterclass on international trade and diplomacy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} ${playfairDisplay.variable} ${fraunces.variable}`}
    >
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
