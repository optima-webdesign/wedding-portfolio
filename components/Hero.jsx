"use client";

import { motion } from "framer-motion";
import Image from "next/image"; 
import Link from "next/link";
import { portfolioData } from "@/lib/data";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function HeroBackgroundImage() {
  const heroData = portfolioData?.hero || {};
  const contactData = portfolioData?.contact || {};

  const subtext = heroData.subtext || "Premium HP Indigo printing, handcrafted in Ahmedabad. We bring your digital memories to life in true, vibrant colours.";
  const ctaTexts = heroData.ctaTexts || { whatsapp: "Get Quote on WhatsApp", gallery: "Explore Gallery" };
  
  const phone = contactData.phone || "919898697991";
  const whatsappMessage = contactData.whatsappMessage || "Hi, I viewed your portfolio and want to inquire about printing a premium photobook.";

  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;

  const cmykGradient = "bg-linear-to-r from-cyan-500 via-blue-500 via-red-500 to-yellow-400";
  const textGradient = "bg-linear-to-r from-cyan-600 via-blue-600 to-red-500";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-16 px-5 md:px-8 overflow-hidden bg-white selection:bg-blue-100 selection:text-blue-900">
      
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-neutral-100">
        <Image
          src="/images/fanned-book-bokeh.png" 
          alt="Handcrafted Heirloom Album Showcase"
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] scale-105" 
          priority 
        />
        
        <div className="absolute inset-0 bg-linear-to-t from-white via-white/90 to-white/40 backdrop-blur-[2px] pointer-events-none"></div>
      </div>

      <div className="max-w-360 mx-auto w-full flex flex-col items-center z-10 relative mt-10 md:mt-20">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-8 lg:mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-neutral-200 text-neutral-700 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_5px_rgba(6,182,212,0.5)]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_5px_rgba(250,204,21,0.5)]"></span>
              </span>
              HP Indigo 15000 Print
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-[5.5rem] font-black tracking-tighter text-neutral-900 mb-6 sm:mb-8 leading-[1.1] sm:leading-[1.05]"
          >
            Memories Printed In <br className="hidden sm:block" />
            <span className={`text-transparent bg-clip-text ${textGradient} px-2`}>
              True Colours.
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-neutral-600 mb-10 sm:mb-12 font-medium max-w-2xl leading-relaxed"
          >
            {subtext}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto mt-2">
            
            
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 bg-neutral-900 text-white w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-base overflow-hidden shadow-xl shadow-neutral-900/20 transition-transform active:scale-95 border border-transparent"
            >
              <div className={`absolute inset-0 ${cmykGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`}></div>
              
              <FaWhatsapp className="text-xl sm:text-2xl relative z-10" />
              <span className="relative z-10 uppercase tracking-wider">{ctaTexts.whatsapp}</span>
            </a>

            {/* Changed <a> to <Link> for internal routing */}
            <Link
              href="/#collection"
              className="group flex items-center justify-center gap-2 text-neutral-700 font-bold text-sm sm:text-base hover:text-blue-600 transition-colors py-3 sm:py-4 px-4 active:scale-95"
            >
              <span className="relative uppercase tracking-widest text-[13px]">
                {ctaTexts.gallery}
                <span className="absolute left-0 -bottom-1.5 w-0 h-[2.5px] bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}