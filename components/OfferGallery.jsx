"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { FaWhatsapp } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function OfferBanner() {
  const contactData = portfolioData?.contact || {};
  const phone = contactData.phone || "919898697991";

  const offerImages = [
    { id: 1, src: "/offer/offer1.jpg" },
    { id: 2, src: "/offer/offer2.jpg" }, 
    { id: 3, src: "/offer/offer3.jpg" },
    { id: 4, src: "/offer/offer4.jpg" },
    { id: 5, src: "/offer/offer5.jpg" },
    { id: 6, src: "/offer/offer6.jpg" },
    { id: 7, src: "/offer/offer7.jpg" },
    { id: 8, src: "/offer/offer8.jpg" },
  ];

  const cmykGradient = "bg-linear-to-r from-cyan-500 via-blue-500 via-red-500 to-yellow-400";

  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section id="offers" className="relative py-20 bg-neutral-50 overflow-hidden">
      <div className="max-w-360 mx-auto">
        
        <div className="text-center mb-12 px-5">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tighter mb-4"
          >
            Hot <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-yellow-500">Offers</span>
          </motion.h2>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center mb-6"
          >
             <div className={`w-16 md:w-20 h-1 rounded-full ${cmykGradient} opacity-80`}></div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-neutral-500 font-medium text-base md:text-lg max-w-xl mx-auto"
          >
            Drag to explore our latest printing deals and exclusive packages. Click any offer to contact us directly.
          </motion.p>
        </div>

        <motion.div 
          ref={carouselRef} 
          className="relative flex overflow-hidden py-8 cursor-grab active:cursor-grabbing px-4"
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }} 
            dragElastic={0.15} 
            className="flex gap-6 items-center w-max"
          >
            {offerImages.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="relative shrink-0 rounded-2xl md:rounded-4xl bg-white border border-neutral-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden group"
              >
                <Image
                  src={item.src}
                  alt="Colours Photobooks Special Offer"
                  width={400} 
                  height={600}
                  className="h-70 sm:h-87.5 md:h-112.5 w-auto object-contain p-1.5 md:p-2 transition-transform duration-500 group-hover:scale-[1.03] pointer-events-none"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 backdrop-blur-[2px] pointer-events-none group-hover:pointer-events-auto">
                  <a 
                    href={`https://wa.me/${phone}?text=Hi, I am interested in your printing offers!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg shadow-2xl hover:bg-[#1ebe57] transition-all transform translate-y-4 group-hover:translate-y-0 active:scale-95 cursor-pointer pointer-events-auto"
                  >
                    <FaWhatsapp className="text-xl md:text-2xl" />
                    Message on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-linear-to-r from-neutral-50 to-transparent z-30 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-linear-to-l from-neutral-50 to-transparent z-30 pointer-events-none"></div>
        </motion.div>
        
      </div>
    </section>
  );
}