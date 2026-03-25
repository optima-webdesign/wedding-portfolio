// app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata = {
  title: "Premium Wedding Albums & Photobooks | Ahmedabad",
  description: "High-quality wedding album printing and photobook designs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />
        
        {/* 'children' yahan aapka page.js wala content hai */}
        {children} 
        
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}