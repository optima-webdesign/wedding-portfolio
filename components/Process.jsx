"use client";

import { motion } from "framer-motion";
import { FiFileText, FiPenTool, FiTruck } from "react-icons/fi";
import { portfolioData } from "@/lib/data";

export default function Process() {
  const processData = portfolioData?.processSteps || [
    { id: 1, title: "1. Share Photos", description: "Upload your high-res digital gallery directly to our secure portal." },
    { id: 2, title: "2. Design & Print", description: "We craft the layout and print using HP Indigo 15000 true colours." },
    { id: 3, title: "3. Get Delivered", description: "Your handcrafted heirloom is shipped securely to your doorstep." }
  ];

  const stepsConfig = [
    {
      icon: <FiFileText key="icon1" className="text-3xl sm:text-4xl text-cyan-500 group-hover:scale-110 transition-transform duration-500" />,
      boxClass: "bg-cyan-50 border-cyan-100 shadow-[0_10px_30px_rgba(6,182,212,0.15)] group-hover:border-cyan-200 group-hover:bg-cyan-100"
    },
    {
      icon: <FiPenTool key="icon2" className="text-3xl sm:text-4xl text-red-500 group-hover:scale-110 transition-transform duration-500" />,
      boxClass: "bg-red-50 border-red-100 shadow-[0_10px_30px_rgba(239,68,68,0.15)] group-hover:border-red-200 group-hover:bg-red-100"
    },
    {
      icon: <FiTruck key="icon3" className="text-3xl sm:text-4xl text-yellow-500 group-hover:scale-110 transition-transform duration-500" />,
      boxClass: "bg-yellow-50 border-yellow-100 shadow-[0_10px_30px_rgba(234,179,8,0.15)] group-hover:border-yellow-200 group-hover:bg-yellow-100"
    }
  ];

  const steps = processData.map((step, index) => ({
    ...step,
    icon: stepsConfig[index]?.icon || stepsConfig[0].icon,
    boxClass: stepsConfig[index]?.boxClass || stepsConfig[0].boxClass
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-neutral-50 overflow-hidden" id="process">
      
      <div className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] bg-cyan-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[20%] w-[30vw] h-[30vw] bg-yellow-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-360 mx-auto text-center relative z-10">
        
        <div className="flex flex-col items-center mb-20 md:mb-28">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 mb-6 tracking-tighter"
          >
            How We Create Your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-blue-600 to-red-500">Masterpiece</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-500 font-medium max-w-xl text-sm md:text-base"
          >
            A seamless, premium experience from your digital gallery to a handcrafted physical heirloom.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-16 sm:gap-20 md:gap-8 max-w-5xl mx-auto"
        >
          <div className="absolute top-12 sm:top-14 left-[16%] right-[16%] h-0.5 bg-neutral-200 hidden md:block z-0 overflow-hidden rounded-full">
            <motion.div 
              initial={{ scaleX: 0, transformOrigin: "left" }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="w-full h-full bg-linear-to-r from-cyan-500 via-red-500 to-yellow-400"
            />
          </div>

          {steps.map((step) => (
            <motion.div key={step.id} variants={itemVariants} className="relative z-10 flex flex-col items-center group">
              
              <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-4xl flex items-center justify-center mb-8 border transition-all duration-500 group-hover:-translate-y-2 cursor-default bg-white ${step.boxClass}`}>
                {step.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 tracking-wide">
                {step.title}
              </h3>
              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-65 font-medium transition-colors duration-300 group-hover:text-neutral-700">
                {step.description}
              </p>
              
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}