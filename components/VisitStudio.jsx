"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { portfolioData } from "@/lib/data";

export default function VisitStudio() {
  const contactData = portfolioData?.contact || {};
  
  const address = contactData.address || "29 BARCELONA INDUSTRIAL PARK, SP RING ROAD ODHAV, ODHAV CROSS ROAD, AHMEDABAD-382415";
  const phone = contactData.phone || "917383021002";
  const displayPhone = contactData.displayPhone || "+91 73830 21002";
  const email = contactData.email || "album@coloursphotobooks.in";

  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  const contactDetails = [
    {
      id: 1,
      icon: <FiMapPin className="text-xl sm:text-2xl text-cyan-500" />,
      bgClass: "bg-cyan-50 group-hover:bg-cyan-100",
      title: "Ahmedabad Studio",
      detail: address,
      link: mapLink
    },
    {
      id: 2,
      icon: <FiPhone className="text-xl sm:text-2xl text-red-500" />,
      bgClass: "bg-red-50 group-hover:bg-red-100",
      title: "Phone",
      detail: displayPhone,
      link: `tel:${phone}`
    },
    {
      id: 3,
      icon: <FiMail className="text-xl sm:text-2xl text-yellow-500" />,
      bgClass: "bg-yellow-50 group-hover:bg-yellow-100",
      title: "Email",
      detail: email,
      link: `mailto:${email}`
    },
  ];

  const cmykGradient = "bg-linear-to-r from-cyan-500 via-blue-500 via-red-500 to-yellow-400";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full py-20 md:py-32 px-5 md:px-8 bg-white overflow-hidden" id="studio">
      
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-cyan-50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-yellow-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-600 text-[11px] md:text-xs font-bold uppercase tracking-[0.15em]">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              Get in Touch
            </span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 mb-6 tracking-tighter"
          >
            Visit Our <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-blue-600 to-red-500">
              photo lab
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-neutral-500 text-sm sm:text-base font-medium max-w-md mb-12">
            Experience our premium HP Indigo print quality in person, or reach out to us for a custom quote.
          </motion.p>

          <div className="space-y-4 sm:space-y-6">
            {contactDetails.map((item) => (
              <motion.a 
                key={item.id} 
                href={item.link}
                target={item.id === 1 ? "_blank" : "_self"}
                rel={item.id === 1 ? "noopener noreferrer" : ""}
                variants={itemVariants} 
                className="group flex items-start gap-4 sm:gap-5 p-4 rounded-3xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all duration-300 hover:shadow-sm"
              >
                <div className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-colors duration-300 ${item.bgClass}`}>
                  {item.icon}
                </div>
                
                <div className="flex flex-col pt-1">
                  <h3 className="text-neutral-900 font-bold text-base sm:text-lg mb-1 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-500 font-medium text-sm sm:text-base leading-relaxed max-w-sm pr-2">
                    {item.detail}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative w-full aspect-4/3 sm:aspect-square md:aspect-4/3 lg:aspect-square bg-white rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] group cursor-pointer block"
        >
          <a href={mapLink} target="_blank" rel="noopener noreferrer" className="relative w-full h-full block">
            <Image
              src="/images/ahmedabad-map.png" 
              alt="Colours Photobooks Studio Map"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/30 transition-colors duration-500 flex items-center justify-center backdrop-blur-[1px]">
              <div className="bg-white text-neutral-900 px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <FiMapPin className="text-lg text-cyan-500" /> View on Google Maps
              </div>
            </div>

          </a>
        </motion.div>

      </div>
    </section>
  );
}