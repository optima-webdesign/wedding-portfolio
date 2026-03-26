// components/AboutPreview.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiTarget, FiAward, FiHeart } from "react-icons/fi";

export default function AboutPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const cmykGradient = "bg-linear-to-r from-cyan-500 via-blue-500 via-red-500 to-yellow-400";

  return (
    <section className="relative w-full py-24 md:py-32 px-5 md:px-8 bg-white overflow-hidden" id="about-preview">
      
      <div className="absolute top-[20%] right-[-5%] w-[30vw] h-[30vw] bg-yellow-50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-cyan-50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-125 sm:h-150 lg:h-175 flex items-center justify-center lg:justify-start"
        >
          <div className="absolute left-0 sm:left-4 lg:left-0 top-0 w-[80%] sm:w-[75%] h-[85%] rounded-4xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <Image
              src="/allbum/about1.png" 
              alt="Colours Photobooks Press Craftsmanship"
              fill
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 border-[6px] border-white/20 rounded-4xl pointer-events-none"></div>
          </div>

          <div className="absolute right-0 sm:right-4 bottom-0 w-[55%] h-[50%] rounded-4xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] border-[6px] border-white bg-neutral-100">
            <Image
              src="/allbum/about2.png" 
              alt="HP Indigo Printing Detail"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-600 text-[11px] md:text-xs font-bold uppercase tracking-[0.15em]">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              Our Story
            </span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 mb-6 tracking-tighter"
          >
            Crafting Memories <br className="hidden sm:block" />
            With <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-blue-600 to-red-500">True Colours.</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-neutral-500 text-base md:text-lg leading-relaxed mb-10 max-w-lg font-medium"
          >
            Based in the heart of Ahmedabad, Colours Photobooks Press is a boutique print studio dedicated to transforming your digital galleries into tactile masterpieces. Using state-of-the-art HP Indigo 15000 technology, we ensure every hue and emotion is preserved forever.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col gap-5 mb-12">
            
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center shrink-0 transition-colors group-hover:bg-cyan-100">
                <FiTarget className="text-xl text-cyan-600" />
              </div>
              <p className="text-neutral-700 font-bold text-sm md:text-base">Unmatched HP Indigo Print Accuracy</p>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center shrink-0 transition-colors group-hover:bg-red-100">
                <FiHeart className="text-xl text-red-500" />
              </div>
              <p className="text-neutral-700 font-bold text-sm md:text-base">Handcrafted Bindings & Premium Covers</p>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-yellow-50 flex items-center justify-center shrink-0 transition-colors group-hover:bg-yellow-100">
                <FiAward className="text-xl text-yellow-500" />
              </div>
              <p className="text-neutral-700 font-bold text-sm md:text-base">Trusted by Photographers Across India</p>
            </div>

          </motion.div>

          <motion.div variants={itemVariants}>
            <Link 
              href="/about"
              className="group relative inline-flex items-center justify-center gap-3 bg-neutral-900 text-white px-8 py-4 rounded-full font-bold text-sm overflow-hidden shadow-xl shadow-neutral-900/10 transition-transform active:scale-95"
            >
              <div className={`absolute inset-0 ${cmykGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`}></div>
              
              <span className="relative z-10 uppercase tracking-wider">Read Full Story</span>
              <FiArrowRight className="relative z-10 text-lg group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}