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
      setTimeout(() => {
        if (carouselRef.current) {
          setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
      }, 300);
    };
    
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section id="offers" className="relative py-20 bg-neutral-50 overflow-hidden w-full">
      <div className="max-w-360 mx-auto w-full">
        
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
          className="relative flex overflow-hidden py-8 px-4 md:px-8 cursor-grab active:cursor-grabbing w-full"
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }} 
            dragElastic={0.15} 
            className="flex gap-6 md:gap-8 items-start w-max pl-4 pr-10" 
          >
            {offerImages.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="relative shrink-0 w-[85vw] sm:w-87.5 lg:w-100 h-fit bg-white p-2 rounded-2xl md:rounded-4xl border border-neutral-200 shadow-lg overflow-hidden group"
              >
                
                <Image
                  src={item.src}
                  alt={`Colours Photobooks Special Offer ${item.id}`}
                  width={800}
                  height={1200}
                  className="w-full h-auto object-contain rounded-xl md:rounded-3xl pointer-events-none"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 350px, 400px"
                  priority={index < 3}
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 backdrop-blur-[2px] rounded-2xl md:rounded-4xl">
                  <a 
                    href={`https://wa.me/${phone}?text=Hi, I am interested in your printing offers!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 md:px-6 md:py-4 rounded-full font-bold text-sm md:text-base shadow-2xl hover:bg-[#1ebe57] transition-all transform translate-y-4 group-hover:translate-y-0 active:scale-95 cursor-pointer pointer-events-auto"
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