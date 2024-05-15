import { Inter } from "next/font/google";
import "./globals.css";
import "./global-icons.css";
import Header from "@ui/header";
import Footer from "@ui/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={inter.className + "flex flex-col min-h-screen min-w-screen"}
    >
      <Header />
      <main className="min-w-full flex-grow bg-white">{children}</main>
      <Footer />
    </div>
  );
}
