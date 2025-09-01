import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Christ Embassy – Royalties Youth Church",
  description: "Official website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-navy text-white font-sans">
        <Navbar />
        {/* Add top padding to prevent overlap with fixed navbar */}
        <main className="pt-16 md:pt-20">{children}</main>
      </body>
    </html>
  );
}
