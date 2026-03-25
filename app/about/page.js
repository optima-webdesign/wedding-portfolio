"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  FiArrowRight, 
  FiTarget, 
  FiAward, 
  FiHeart, 
  FiCheckCircle, 
  FiBookOpen, 
  FiLayers, 
  FiCamera, 
  FiBox 
} from "react-icons/fi";

export default function AboutFull() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cmykGradient = "bg-linear-to-r from-cyan-500 via-blue-500 via-red-500 to-yellow-400";

  return (
    <main className="min-h-screen bg-white pt-24 md:pt-32 pb-16 md:pb-24 selection:bg-cyan-500/20 selection:text-cyan-900 overflow-hidden relative">
      
      <div className="absolute top-[5%] right-[-5%] w-[40vw] h-[40vw] bg-cyan-50 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-yellow-50 rounded-full blur-[120px] pointer-events-none -z-10" />

      <section className="px-5 md:px-8 max-w-360 mx-auto mb-20 md:mb-32 relative z-10">
        <div className="max-w-4xl pt-8 md:pt-0">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-500 text-[11px] md:text-xs font-bold uppercase tracking-[0.15em]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
              About Colours Photobooks Press
            </span>
          </motion.div>

          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-black text-neutral-900 tracking-tighter leading-[1.05] mb-8"
          >
            Turning Memories Into <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 via-blue-500 to-red-500 pr-2 pb-2">
              Physical Keepsakes.
            </span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-neutral-500 font-medium max-w-3xl leading-relaxed space-y-6"
          >
            <p>
              Colours Photobooks Press is a professional photo printing studio based in Ahmedabad, specializing in premium photobooks, wedding albums, and custom photo printing solutions.
            </p>
            <div className="relative pl-6 py-2 border-l-4 border-red-500 bg-red-50/50 rounded-r-xl">
              <p className="text-neutral-900 font-bold text-lg md:text-xl">
                We don&apos;t just print photos. We turn your memories into high-quality physical keepsakes that last for years.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 md:px-8 max-w-360 mx-auto mb-20 md:mb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-4/3 lg:aspect-square w-full rounded-4xl lg:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] border-8 border-white"
          >
            <Image 
              src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1000&auto=format&fit=crop" 
              alt="Artisan binding a wedding album"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-[2s] hover:scale-105"
            />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeUp} className="text-neutral-500 font-medium text-base sm:text-lg leading-relaxed">
              <p>
                In today&apos;s digital world, most photos stay on phones or drives and eventually get forgotten. Our goal is to transform those moments into beautifully crafted photobooks that you can hold, share, and revisit anytime.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-neutral-50 p-8 rounded-4xl border border-neutral-100 shadow-sm relative overflow-hidden group">
              <div className={`absolute top-0 left-0 w-full h-1 ${cmykGradient}`}></div>
              
              <h2 className="text-3xl font-black text-neutral-900 tracking-tight mb-4 mt-2">
                Our Vision
              </h2>
              
              <p className="text-neutral-900 font-bold mb-3 text-lg">Our mission is simple:</p>
              <p className="text-neutral-600 font-medium italic mb-6">
                &quot;To create photobooks that not only store photos but preserve emotions for years to come.&quot;
              </p>
              
              <p className="text-neutral-500 font-medium text-sm md:text-base">
                Digital files can be lost, but a well-crafted album becomes a lasting memory you can revisit anytime.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      <section className="bg-neutral-50 py-20 md:py-28 px-5 md:px-8 mb-20 md:mb-32 rounded-4xl md:rounded-[3rem] max-w-360 mx-auto border border-neutral-100">
        <div className="max-w-360 mx-auto">
          
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tighter mb-6">Our Services</h2>
            <p className="text-neutral-500 font-medium max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              We offer a wide range of professional photo printing and album solutions. Every product is created with attention to detail, ensuring a perfect balance of design, print quality, and durability.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {[
              { icon: <FiBookOpen />, text: "Premium Wedding Photobooks" },
              { icon: <FiLayers />, text: "Layflat Albums with seamless panoramic spreads" },
              { icon: <FiTarget />, text: "Custom Designed Photo Albums" },
              { icon: <FiCamera />, text: "Portfolio Books for photographers and creatives" },
              { icon: <FiHeart />, text: "Mini & Pocket Photo Albums" },
              { icon: <FiBox />, text: "Luxury Album Boxes & Packaging" }
            ].map((service, index) => (
              <motion.div key={index} variants={fadeUp} className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.02)] border border-neutral-100 flex flex-col items-start gap-4 hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-600 text-xl">
                  {service.icon}
                </div>
                <h3 className="font-bold text-neutral-800 text-base md:text-lg">{service.text}</h3>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </section>

      <section className="px-5 md:px-8 max-w-360 mx-auto mb-20 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col bg-white border border-neutral-200 rounded-4xl p-8 md:p-12 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-3xl font-black text-neutral-900 tracking-tight mb-4">Our Process</h2>
            <p className="text-neutral-500 font-medium mb-8">
              Our work is not random. It follows a structured and quality-focused process. This ensures that every album we deliver meets premium standards.
            </p>
            <div className="space-y-4">
              {[
                "Understanding your design and requirements",
                "Selecting the right materials (paper, cover, finish)",
                "High-precision printing with accurate colors",
                "Strong and clean handcrafted binding",
                "Final quality check before delivery"
              ].map((step, index) => (
                <motion.div key={index} variants={fadeUp} className="flex items-start gap-4 p-3 rounded-xl hover:bg-neutral-50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center font-black text-sm shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="font-bold text-neutral-700 pt-1">{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col bg-neutral-900 text-white rounded-4xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-red-500/20 rounded-full blur-[80px] pointer-events-none"></div>
            
            <h2 className="text-3xl font-black mb-4 tracking-tight">Our Approach</h2>
            <p className="text-neutral-300 font-medium mb-8">
              We focus on quality over quantity. Instead of mass, low-cost printing, we aim to deliver:
            </p>
            <div className="space-y-6 mb-8 grow">
              {[
                "Sharp and accurate print quality",
                "Durable and long-lasting materials",
                "Clean, modern, and elegant designs",
                "Consistent finishing in every product"
              ].map((point, index) => (
                <motion.div key={index} variants={fadeUp} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <FiCheckCircle className="text-cyan-400 text-lg" />
                  </div>
                  <p className="font-bold text-white text-base md:text-lg">{point}</p>
                </motion.div>
              ))}
            </div>
            <div className="pt-6 border-t border-white/10">
               <p className="text-neutral-400 font-medium text-sm md:text-base">
                 Each album represents a personal story, and we treat it with the care it deserves.
               </p>
            </div>
          </motion.div>

        </div>
      </section>

      <section className="px-5 md:px-8 max-w-360 mx-auto text-center">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tighter mb-8 leading-[1.1]">
            Why Choose Colours Photobooks Press in Ahmedabad
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            {[
              "Trusted photobook printing service in Ahmedabad",
              "Premium materials and modern printing technology",
              "Flexible customization options",
              "Strong binding and professional finishing",
              "Reliable delivery timelines",
              "Consistent output quality"
            ].map((reason, index) => (
              <motion.div key={index} variants={fadeUp} className="px-5 py-3 bg-white border border-neutral-200 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-bold text-neutral-700 flex items-center gap-2">
                <FiAward className="text-yellow-500 text-lg shrink-0" />
                {reason}
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="bg-linear-to-br from-cyan-50 to-blue-50 border border-cyan-100 p-8 md:p-10 rounded-4xl inline-block w-full shadow-sm">
            <p className="text-neutral-900 font-black text-lg md:text-2xl leading-relaxed">
              If you are looking for a high-quality photobook printing service in Ahmedabad, we provide solutions that stand out in both look and durability.
            </p>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}