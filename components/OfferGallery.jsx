"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useCallback } from "react";

export default function OfferBanner() {
  const contactData = portfolioData?.contact || {};
  const phone = contactData.phone || "919898697991";
  const controls = useAnimation();

  const startAnimation = useCallback(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        ease: "linear",
        duration: 35,
        repeat: Infinity,
      },
    });
  }, [controls]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  const offerImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600", title: "Wedding Gold" },
    { id: 2, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=600", title: "Royal Velvet" },
    { id: 3, src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600", title: "Premium Matte" },
    { id: 4, src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=600", title: "Classic Heirloom" },
    { id: 5, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600", title: "Luxury Box" },
  ];

  const cmykGradient = "from-cyan-400 via-red-500 to-yellow-400";

  return (
    <section id="offers" className="relative py-24 bg-white overflow-hidden group/main">
      <div className="max-w-360 mx-auto">
        
        <div className="text-center mb-16 px-5">
          <motion.h2 className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tighter mb-4">
            Hot <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-orange-500">Offers</span>
          </motion.h2>
          <p className="text-neutral-500 font-medium text-lg">Hover over any card to pause and grab the deal.</p>
        </div>

        <div 
          className="relative flex overflow-hidden py-12"
          onMouseEnter={() => controls.stop()} 
          onMouseLeave={() => startAnimation()} 
        >
          <motion.div 
            className="flex gap-8 px-4"
            animate={controls}
            style={{ display: 'flex', width: 'fit-content' }}
          >
            {[...offerImages, ...offerImages, ...offerImages].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.08, y: -10 }}
                className="relative w-70 sm:w-95 aspect-4/5 shrink-0 rounded-[3rem] p-1 group cursor-pointer transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-linear-to-tr ${cmykGradient} rounded-[3rem] opacity-0 group-hover:opacity-100 blur-md animate-pulse transition-opacity duration-500`}></div>
                
                <div className="relative h-full w-full bg-white rounded-[2.8rem] overflow-hidden shadow-2xl z-10 border border-neutral-100">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 backdrop-blur-[1px] transition-all duration-500"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 z-20">
                    <h3 className="text-white text-2xl font-black mb-4 drop-shadow-lg">{item.title}</h3>
                    
                    <a 
                      href={`https://wa.me/${phone}?text=I want to claim: ${item.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-white text-neutral-900 px-6 py-3 rounded-full font-black text-sm uppercase tracking-wider shadow-2xl hover:bg-green-500 hover:text-white transition-all transform hover:scale-105 active:scale-90"
                    >
                      <FaWhatsapp className="text-xl" />
                      Claim Now
                    </a>
                  </div>

                  <div className="absolute top-6 left-6 z-20">
                    <span className="bg-white/90 backdrop-blur-md border border-white text-neutral-900 text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                      Limited Deal
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-linear-to-r from-white via-white/50 to-transparent z-30 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-linear-to-l from-white via-white/50 to-transparent z-30 pointer-events-none"></div>
        </div>

        <div className="flex justify-center mt-10 gap-2">
            <div className="w-12 h-1 bg-neutral-100 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ x: [-50, 50] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className={`w-1/2 h-full bg-linear-to-r ${cmykGradient}`} 
                />
            </div>
            <span className="text-neutral-300 font-bold text-[10px] uppercase tracking-[0.4em]">Interactive Slider</span>
            <div className="w-12 h-1 bg-neutral-100 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ x: [50, -50] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className={`w-1/2 h-full bg-linear-to-r ${cmykGradient}`} 
                />
            </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-neon {
          0%, 100% { opacity: 0.7; filter: blur(5px); }
          50% { opacity: 1; filter: blur(10px); }
        }
        .group:hover .animate-pulse {
          animation: pulse-neon 1s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}