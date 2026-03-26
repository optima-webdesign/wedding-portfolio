"use client";

import { motion } from "framer-motion";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { portfolioData } from "@/lib/data";

export default function CTASection() {
  const contactData = portfolioData?.contact || {};
  const phone = contactData.phone || "919898697991";
  
  const email = "allbum@coloursphotobooks.in";
  
  const cmykGradient = "bg-linear-to-r from-cyan-500 via-blue-500 via-red-500 to-yellow-400";

  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900 overflow-hidden">
      
      {/* Background CMYK Glow Effect */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-4/5 md:w-3/5 h-1/2 ${cmykGradient} opacity-20 blur-[100px] md:blur-[140px] rounded-full pointer-events-none`}></div>
      <div className="absolute bottom-0 right-0 w-2/5 h-2/5 bg-blue-500 opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-8 inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-[11px] md:text-sm font-bold uppercase tracking-[0.2em] backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          Let&apos;s Work Together
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-4 md:mb-6 leading-tight"
        >
          Ready to Print Your <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-400 to-red-400">
            Masterpiece?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-400 text-base sm:text-lg md:text-xl font-medium mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2"
        >
          Experience the unmatched quality of HP Indigo printing. Get in touch with us today for custom quotes and exclusive photographer packages.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-md mx-auto sm:max-w-none"
        >
          {/* EMAIL BUTTON */}
          <a
            href={`mailto:${email}?subject=Inquiry for Photobook Printing`}
            className="group relative flex items-center justify-center gap-3 bg-white text-neutral-900 w-full sm:w-auto px-6 py-4 md:px-10 md:py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(255,255,255,0.1)] active:scale-95"
          >
            <FiMail className="text-xl text-red-500" />
            Email Us
            <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
          </a>

          {/* WHATSAPP BUTTON */}
          <a
            href={`https://wa.me/${phone}?text=Hi, I would like to get a quote for a photobook!`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 bg-[#25D366] text-white w-full sm:w-auto px-6 py-4 md:px-10 md:py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-[#1ebe57] hover:scale-105 transition-all shadow-[0_10px_30px_rgba(37,211,102,0.2)] active:scale-95"
          >
            <FaWhatsapp className="text-2xl" />
            Chat on WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
}