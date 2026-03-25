"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiZoomIn } from "react-icons/fi";
import { galleryData } from "@/lib/galleryData"; 

export default function HomeGallery() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const topFourImages = galleryData.slice(0, 4);

  return (
    <section id="collection" className="relative py-24 px-5 md:px-8 bg-neutral-50 overflow-hidden">
      
      <div className="absolute top-[10%] right-[10%] w-[20vw] h-[20vw] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[30vw] h-[30vw] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-360 mx-auto w-full relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tighter mb-4">
              Our Gallery
            </h2>
            <p className="text-neutral-500 text-base sm:text-lg font-medium max-w-md">
              A glimpse of our handcrafted masterpieces, printed in true colours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
             <Link 
              href="/portfolio"
              className="group flex items-center justify-center gap-2 bg-white text-neutral-900 px-6 py-3 rounded-full font-bold text-sm shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:text-blue-600 transition-all active:scale-95"
            >
              <span className="uppercase tracking-widest text-[13px]">
                View Full Portfolio
              </span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {topFourImages.map((image, index) => {
             const isEven = index % 2 !== 0; 
             const layoutClass = isEven ? "lg:mt-16 aspect-square" : "lg:mt-0 aspect-[4/5]";

            return (
              <motion.div 
                key={image.id} 
                variants={itemVariants}
                className={`relative group ${layoutClass}`}
              >
                <div className="relative w-full h-full overflow-hidden rounded-4xl border-4 border-white bg-neutral-200 shadow-[0_10px_40px_rgba(0,0,0,0.08)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-shadow duration-500">
                  <Image
                    src={image.src}
                    alt={image.alt || "Gallery Image"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-neutral-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                     <div className="bg-white text-neutral-900 p-4 rounded-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                       <FiZoomIn className="text-xl" />
                     </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  );
}