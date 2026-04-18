import type { Metadata } from "next";
import { Amiri, Crimson_Pro, Scheherazade_New, Lateef } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic", "latin"],
  variable: "--font-amiri",
});

const scheherazade = Scheherazade_New({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic", "latin"],
  variable: "--font-scheherazade",
});

const lateef = Lateef({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic", "latin"],
  variable: "--font-lateef",
});

const crimsonPro = Crimson_Pro({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-crimson",
});

export const metadata: Metadata = {
  title: "Mushaf — The Noble Quran",
  description: "The Noble Quran - Read and search the Holy Quran",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${amiri.variable} ${scheherazade.variable} ${lateef.variable} ${crimsonPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
