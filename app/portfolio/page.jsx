"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiZoomIn, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData } from "@/lib/galleryData"; 

export default function PortfolioPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedIndex(null), 300);
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % galleryData.length);
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
  };

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isLightboxOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-cyan-500/20 selection:text-cyan-900">
      
      <div className="pt-16 md:pt-24 pb-24 px-4 md:px-8 max-w-360 mx-auto">
        
        <div className="text-center mb-16 md:mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 text-neutral-900"
          >
            The Masterpiece <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-blue-600 to-red-500">
              Collection.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-500 font-medium max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            Explore our complete archive of handcrafted photobooks, spreads, and premium covers printed in true HP Indigo colours.
          </motion.p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {galleryData.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="relative break-inside-avoid overflow-hidden rounded-2xl lg:rounded-4xl bg-neutral-200 border-4 border-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] group hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-shadow duration-500 cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt || "Premium Photobook Portfolio"}
                width={800}
                height={1200}
                className="w-full h-auto object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                loading="lazy" 
              />
              
              <div className="absolute inset-0 bg-neutral-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-white text-neutral-900 p-4 rounded-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                  <FiZoomIn className="text-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <AnimatePresence>
        {isLightboxOpen && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-100 bg-neutral-950/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button 
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-6 right-6 md:top-10 md:right-10 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md"
            >
              <FiX className="text-2xl" />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-10 z-50 p-3 md:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md hidden sm:block"
            >
              <FiChevronLeft className="text-2xl md:text-3xl" />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-10 z-50 p-3 md:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md hidden sm:block"
            >
              <FiChevronRight className="text-2xl md:text-3xl" />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-[80vh] mx-4 md:mx-20"
              onClick={(e) => e.stopPropagation()} 
            >
              <Image
                src={galleryData[selectedIndex].src}
                alt={galleryData[selectedIndex].alt || "Fullscreen Portfolio Image"}
                fill
                className="object-contain"
                sizes="100vw"
                priority 
              />
            </motion.div>

            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-white/50 font-medium tracking-widest text-sm">
              {selectedIndex + 1} / {galleryData.length}
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}