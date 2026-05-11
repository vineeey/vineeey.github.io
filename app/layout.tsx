import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "VINAY K P | AI & Data Science Portfolio",
  description:
    "Futuristic 3D portfolio of VINAY K P, AI & Data Science student from Kannur, Kerala.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#05080f] text-cyan-50">{children}</body>
    </html>
  );
}
