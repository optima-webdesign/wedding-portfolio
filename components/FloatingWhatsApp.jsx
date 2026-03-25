"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { portfolioData } from "@/lib/data";

export default function FloatingWhatsApp() {
  // Safe data fetching with fallbacks
  const contactData = portfolioData?.contact || {};
  const phone = contactData.phone || "919898697991";
  const whatsappMessage = contactData.whatsappMessage || "Hi, I viewed your portfolio and want to inquire about printing a premium photobook.";
  
  // WhatsApp Link Generator
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;

  // The Vibrant Theme Gradient for the hover glow
  const cmykGradient = "bg-gradient-to-r from-cyan-500 via-blue-500 via-red-500 to-yellow-400";

  return (
    // Fixed the z-index warning (z-50 is standard and high enough, but left as 999 for safety)
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-999">
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 1.5 
        }}
        className="group relative flex items-center bg-white text-neutral-900 rounded-full p-3.5 md:p-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0_15px_40px_rgba(37,211,102,0.2)] border border-neutral-100 overflow-hidden cursor-pointer active:scale-95"
      >
        {/* VIBRANT GLOW EFFECT */}
        <div className={`absolute inset-0 ${cmykGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`}></div>

        {/* INNER WHITE BACKGROUND: Fixed linter warning -> inset-[2px] is now inset-0.5 */}
        <div className="absolute inset-0.5 bg-white rounded-full z-0 transition-colors duration-500 group-hover:bg-neutral-50"></div>

        {/* WRAPPER FOR ICON & DOT: This keeps the dot perfectly attached to the icon! */}
        <div className="relative z-10 flex items-center justify-center">
          {/* NOTIFICATION DOT: Positioned tightly against the WhatsApp icon */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3 z-20">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
          </span>
          
          <FaWhatsapp className="text-[28px] md:text-[32px] text-[#25D366] group-hover:scale-110 transition-transform duration-500 ease-out" />
        </div>

        {/* EXPANDING TEXT: Fixed linter warnings -> group-hover:max-w-32 and Let&apos;s */}
        <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-32 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative z-10 font-bold text-sm md:text-base tracking-wide text-neutral-800">
          <span className="pl-3 pr-2 block">Let&apos;s Chat</span>
        </span>

      </motion.a>
    </div>
  );
}