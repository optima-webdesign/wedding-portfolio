"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiMapPin, FiPhone, FiMail, FiSend, FiCheckCircle } from "react-icons/fi";
import { portfolioData } from "@/lib/data";

export default function ContactPage() {
  const { phone } = portfolioData?.contact || { phone: "919898697991" };
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const cmykGradient = "bg-linear-to-r from-cyan-500 via-blue-500 via-red-500 to-yellow-400";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        setIsSent(true);
        e.target.reset(); 
        
        setTimeout(() => setIsSent(false), 5000); 
      } else {
        alert("Something went wrong: " + result.message);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Check your internet connection.");
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fafb] pt-24 md:pt-32 pb-16 px-4 md:px-8 selection:bg-cyan-500/20">
      <div className="max-w-325 mx-auto">
        
        <div className="text-center mb-12 md:mb-16 relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-neutral-900 tracking-tighter mb-4"
          >
            Contact Us
          </motion.h1>
          <div className="flex justify-center mb-6 md:mb-8">
             <div className={`w-20 md:w-24 h-1.5 rounded-full ${cmykGradient}`}></div>
          </div>
          <p className="text-neutral-500 max-w-xl mx-auto font-medium text-base md:text-lg leading-relaxed px-4">
            Reach out to discuss your wedding album, request a quote, or schedule a visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-neutral-100"
          >
            <AnimatePresence mode="wait">
              {isSent ? (
                <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16 md:py-20">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiCheckCircle className="text-5xl text-green-500" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">Message Sent!</h3>
                  <p className="text-neutral-500 mt-2">We&apos;ve received your inquiry. We&apos;ll reply soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    <input required name="email" type="email" placeholder="Email Address" className="w-full px-6 py-4 md:px-7 md:py-5 bg-[#f1f5f6] rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all border-none font-medium text-sm md:text-base" />
                    <input required name="phone" type="tel" placeholder="Phone Number" className="w-full px-6 py-4 md:px-7 md:py-5 bg-[#f1f5f6] rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all border-none font-medium text-sm md:text-base" />
                  </div>
                  <input required name="name" type="text" placeholder="Full Name" className="w-full px-6 py-4 md:px-7 md:py-5 bg-[#f1f5f6] rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all border-none font-medium text-sm md:text-base" />
                  
                  <select required name="service" defaultValue="" className="w-full px-6 py-4 md:px-7 md:py-5 bg-[#f1f5f6] rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500/20 appearance-none cursor-pointer font-medium text-neutral-500 text-sm md:text-base">
                    <option value="" disabled>Select Service</option>
                    <option value="Premium Wedding Album">Premium Wedding Album</option>
                    <option value="Coffee Table Photobook">Coffee Table Photobook</option>
                    <option value="Mini Parent Books">Mini Parent Books</option>
                  </select>

                  <textarea required name="message" rows="4" placeholder="Your Message" className="w-full px-6 py-5 md:px-7 md:py-6 bg-[#f1f5f6] rounded-4xl focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none border-none font-medium text-sm md:text-base"></textarea>
                  
                  <button disabled={isSubmitting} type="submit" className="relative w-full md:w-auto overflow-hidden group px-10 py-4 md:px-12 md:py-5 text-white rounded-full font-bold uppercase tracking-widest transition-all shadow-xl active:scale-95 bg-neutral-900 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed">
                    <div className={`absolute inset-0 ${cmykGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <span className="relative z-10 flex items-center gap-2 justify-center">
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <FiSend />
                          Submit Message
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="bg-neutral-900 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] text-white flex flex-col justify-center relative overflow-hidden group">
            <div className={`absolute -top-20 -right-20 w-64 h-64 ${cmykGradient} opacity-20 blur-[80px] rounded-full`}></div>
            <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10 leading-tight">Our Newsletters</h3>
            <p className="text-neutral-400 mb-8 text-sm md:text-base relative z-10">Get updates on new handcrafted designs and exclusive offers.</p>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
              <input type="hidden" name="name" value="Newsletter Subscriber" />
              <input type="hidden" name="message" value="Please add me to your newsletter list." />
              <input type="hidden" name="service" value="Newsletter Subscription" />
              
              <input required name="email" type="email" placeholder="Your Email" className="w-full px-6 py-4 bg-white/10 border border-white/10 rounded-full text-white placeholder:text-neutral-500 focus:outline-none focus:bg-white/20 transition-all text-sm" />
              <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-white text-neutral-900 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-cyan-400 transition-colors disabled:opacity-50">
                {isSubmitting ? "Subscribing..." : "Subscribe Now"}
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {[
            { icon: <FiPhone className="text-cyan-600" />, title: "Call Us", detail: `+91 ${phone}`, bg: "bg-cyan-50" },
            { icon: <FiMail className="text-red-500" />, title: "Email Us", detail: "print@colourspress.in", bg: "bg-red-50" },
            { icon: <FiMapPin className="text-yellow-600" />, title: "Studio", detail: "Ahmedabad, Gujarat", bg: "bg-yellow-50" }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -5 }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] flex flex-col items-center text-center shadow-sm border border-neutral-100"
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-5 md:mb-6`}>
                <div className="text-2xl">{item.icon}</div>
              </div>
              <p className="text-neutral-400 font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-2">{item.title}</p>
              <h4 className="text-lg md:text-xl font-black text-neutral-900">{item.detail}</h4>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full h-87.5 md:h-125 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden relative border-[6px] md:border-12 border-white shadow-2xl"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117498.93282216719!2d72.5028477!3d23.028919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </motion.div>

      </div>
    </main>
  );
}