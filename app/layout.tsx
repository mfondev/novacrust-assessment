import type { Metadata } from "next";
import { Instrument_Sans, Outfit } from "next/font/google";
import localFont from 'next/font/local'
import './globals.css'

const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Medium.otf",
  variable: "--font-clash", 
})

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Novacrust Payment",
  description: "Novacrust Payment Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${outfit.variable} ${clashDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
