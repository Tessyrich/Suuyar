import type { Metadata, Viewport } from "next";
import type React from "react";
import { Bricolage_Grotesque, Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suuyar.com"),
  title: {
    default: "Suuyar | Nigerian Suya Grill, Peckham",
    template: "%s | Suuyar",
  },
  description:
    "Yaji-crusted suya over open flame, from the Rye Lane stall that started the queue. Peckham Rye, Rye Lane and Catford. Weekend suya buffet, £25.",
  openGraph: {
    title: "Suuyar | Suya worth the queue",
    description:
      "Nigerian suya grill in Peckham. Beef, tozo, asun, wings and tilapia over charcoal. Weekend buffet every Saturday and Sunday.",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/images/grill.jpg", width: 1920, height: 920 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0907",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${bricolage.variable} ${geist.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
