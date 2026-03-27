import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Colours Photobooks Press | Premium Wedding Albums in Ahmedabad",
  description: "High-quality wedding album printing, custom photobooks, and premium combo offers. Visit our studio at Barcelona Estate, Odhav, Ahmedabad.",
  keywords: "wedding albums Ahmedabad, photobooks printing, Colours Photobooks, wedding album printer Odhav, premium photo albums",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#f8fafb] text-neutral-900 overflow-x-hidden`}>
        <Navbar />
        
        <main className="min-h-screen">
          {children} 
        </main>
        
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}