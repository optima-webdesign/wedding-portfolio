"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { portfolioData } from "@/lib/data";

export default function ContactPage() {
  const { phone } = portfolioData?.contact || { phone: "9898697991" };
  
  const fullAddress = "SHED NO-29/1, BARCELONA ESTATE, Sardar Patel Ring Rd, near ODHAV CROSS ROAD, Odhav, Ahmedabad, Gujarat 382345";
  
  const cmykGradient = "bg-linear-to-r from-cyan-500 via-blue-500 via-red-500 to-yellow-400";

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const clientPhone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');

    const waText = `Hello Colours Photobooks!%0A%0A*New Inquiry from Website*%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${clientPhone}%0A*Service:* ${service}%0A%0A*Message:*%0A${message}`;
    
    const waUrl = `https://wa.me/${phone}?text=${waText}`;
    window.open(waUrl, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#f8fafb] pt-24 md:pt-32 pb-16 px-4 md:px-8 selection:bg-cyan-500/20">
      <div className="max-w-360 mx-auto">
        
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
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <input required name="email" type="email" placeholder="Email Address" className="w-full px-6 py-4 md:px-7 md:py-5 bg-[#f1f5f6] rounded-full focus:outline-none focus:ring-2 focus:ring-[#25D366]/30 transition-all border-none font-medium text-sm md:text-base" />
                <input required name="phone" type="tel" placeholder="Phone Number" className="w-full px-6 py-4 md:px-7 md:py-5 bg-[#f1f5f6] rounded-full focus:outline-none focus:ring-2 focus:ring-[#25D366]/30 transition-all border-none font-medium text-sm md:text-base" />
              </div>
              <input required name="name" type="text" placeholder="Full Name" className="w-full px-6 py-4 md:px-7 md:py-5 bg-[#f1f5f6] rounded-full focus:outline-none focus:ring-2 focus:ring-[#25D366]/30 transition-all border-none font-medium text-sm md:text-base" />
              
              <select required name="service" defaultValue="" className="w-full px-6 py-4 md:px-7 md:py-5 bg-[#f1f5f6] rounded-full focus:outline-none focus:ring-2 focus:ring-[#25D366]/30 appearance-none cursor-pointer font-medium text-neutral-500 text-sm md:text-base">
                <option value="" disabled>Select Service</option>
                <option value="Premium Wedding Album">Premium Wedding Album</option>
                <option value="Coffee Table Photobook">Coffee Table Photobook</option>
                <option value="Mini Parent Books">Mini Parent Books</option>
              </select>

              <textarea required name="message" rows="4" placeholder="Your Message" className="w-full px-6 py-5 md:px-7 md:py-6 bg-[#f1f5f6] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#25D366]/30 transition-all resize-none border-none font-medium text-sm md:text-base"></textarea>
              
              <button type="submit" className="relative w-full md:w-auto px-10 py-4 md:px-12 md:py-5 text-white rounded-full font-bold uppercase tracking-widest transition-all shadow-xl active:scale-95 bg-[#25D366] hover:bg-green-600 cursor-pointer flex items-center justify-center gap-3">
                <FaWhatsapp className="text-2xl" />
                Send via WhatsApp
              </button>
            </form>
          </motion.div>

          <div className="bg-neutral-900 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] text-white flex flex-col justify-center relative overflow-hidden group">
            <div className={`absolute -top-20 -right-20 w-64 h-64 ${cmykGradient} opacity-20 blur-[80px] rounded-full`}></div>
            <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10 leading-tight">Fast Reply?</h3>
            <p className="text-neutral-400 mb-8 text-sm md:text-base relative z-10">Skip the form and chat directly with our team on WhatsApp for instant support.</p>
            
            <a 
              href={`https://wa.me/${phone}?text=Hi, I want to know more about your photobooks!`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-full py-4 bg-white text-neutral-900 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm text-center hover:bg-green-500 hover:text-white transition-all shadow-lg flex justify-center items-center gap-2"
            >
              <FaWhatsapp className="text-lg" />
              Chat Now
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          
          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 md:p-10 rounded-[2.5rem] flex flex-col items-center text-center shadow-sm border border-neutral-100">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mb-5 md:mb-6">
              <FiPhone className="text-2xl text-cyan-600" />
            </div>
            <p className="text-neutral-400 font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-2">Call Us</p>
            <h4 className="text-lg md:text-xl font-black text-neutral-900">+{phone}</h4>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 md:p-10 rounded-[2.5rem] flex flex-col items-center text-center shadow-sm border border-neutral-100">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-5 md:mb-6">
              <FiMail className="text-2xl text-red-500" />
            </div>
            <p className="text-neutral-400 font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-2">Email Us</p>
            <h4 className="text-lg md:text-xl font-black text-neutral-900">allbum@coloursphotobooks.in</h4>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-white p-8 md:p-10 rounded-[2.5rem] flex flex-col items-center text-center shadow-sm border border-neutral-100">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-5 md:mb-6">
              <FiMapPin className="text-2xl text-yellow-600" />
            </div>
            <p className="text-neutral-400 font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-2">Studio</p>
            <h4 className="text-sm font-bold text-neutral-900 leading-relaxed px-2">{fullAddress}</h4>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full h-87.5 md:h-125 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden relative border-6 md:border-12 border-white shadow-2xl"
        >
          <iframe 
            src={`http://googleusercontent.com/maps.google.com/6{encodeURIComponent(fullAddress)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
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