import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./global-icons.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Language practice",
  description: "This app allows to configuring your own flashcards for practicing japanese.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
