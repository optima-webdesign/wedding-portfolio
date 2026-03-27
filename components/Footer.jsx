"use client";

import { portfolioData } from "@/lib/data";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const contactData = portfolioData?.contact || {};
  
  const location = contactData.location || "SHED NO-29/1, BARCELONA ESTATE, Sardar Patel Ring Rd, near ODHAV CROSS ROAD, Odhav, Ahmedabad, Gujarat 382345";
  
  const phone = contactData.phone || "919898697991";

  return (
    <footer className="relative bg-white text-neutral-600 pt-20 pb-10 px-6 md:px-12 z-20 border-t border-neutral-100">
      
      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-blue-600 to-cyan-500 opacity-90"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16 relative z-10">
        
        <div className="flex flex-col gap-5 md:col-span-5 lg:col-span-4">
          
          <Link href="/" className="flex flex-col shrink-0 w-fit group hover:opacity-90 transition-opacity mb-2">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-neutral-200 shadow-sm shrink-0">
                <Image 
                  src="/colourslogo.png" 
                  alt="Colours Logo Icon" 
                  fill 
                  className="object-cover" 
                />
              </div>

              <div className="relative w-28 h-8 md:w-36 md:h-10 shrink-0">
                <Image 
                  src="/coloursweb.png" 
                  alt="Colours Typography" 
                  fill 
                  className="object-contain object-left" 
                />
              </div>
            </div>
            
            <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-500 uppercase mt-2 pl-1 transition-colors group-hover:text-neutral-800">
              Photobooks Press
            </span>
          </Link>

          <p className="text-neutral-500 font-medium max-w-sm leading-relaxed text-sm md:text-base mt-2">
            Bringing your digital memories to life through premium HP Indigo printing. Vibrant colors, archival quality, and handcrafted perfection.
          </p>
          
          <div className="flex gap-4 mt-4">
            <a href="#" className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-linear-to-tr hover:from-red-500 hover:to-yellow-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/20 text-neutral-600 hover:text-white group">
              <FaInstagram className="text-lg" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-linear-to-tr hover:from-blue-600 hover:to-cyan-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 text-neutral-600 hover:text-white group">
              <FaFacebookF className="text-lg" />
            </a>
            <a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-[#25D366] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#25D366]/20 text-neutral-600 hover:text-white group">
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:col-span-3 lg:col-span-4 lg:pl-12">
          <h4 className="text-neutral-900 font-bold mb-4 tracking-wide uppercase text-sm">Quick Links</h4>
          <Link href="/about" className="text-neutral-600 hover:text-blue-600 transition-colors w-fit font-semibold text-sm">About Us</Link>
          <Link href="/portfolio" className="text-neutral-600 hover:text-blue-600 transition-colors w-fit font-semibold text-sm">Gallery</Link>
          <Link href="/#offers" className="text-neutral-600 hover:text-blue-600 transition-colors w-fit font-semibold text-sm">Special Offers</Link>
          <Link href="/#studio" className="text-neutral-600 hover:text-blue-600 transition-colors w-fit font-semibold text-sm">Visit Our Studio</Link>
        </div>

        <div className="flex flex-col gap-5 md:col-span-4 lg:col-span-4">
          <h4 className="text-neutral-900 font-bold mb-3 tracking-wide uppercase text-sm">Get in Touch</h4>
          
          <div className="flex items-start gap-4 text-neutral-600 group">
            <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center shrink-0 group-hover:bg-cyan-100 transition-colors mt-1">
              <FiMapPin className="text-lg text-cyan-500" />
            </div>
            <p className="font-medium text-sm leading-relaxed pt-1 pr-4">{location}</p>
          </div>
          
          <div className="flex items-center gap-4 text-neutral-600 group">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-colors">
              <FiPhone className="text-lg text-red-500" />
            </div>
            <p className="font-medium text-sm">+{phone}</p>
          </div>
          
          <div className="flex items-center gap-4 text-neutral-600 group">
            <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center shrink-0 group-hover:bg-yellow-100 transition-colors">
              <FiMail className="text-lg text-yellow-500" />
            </div>
            <p className="font-medium text-sm break-all">album@coloursphotobooks.in</p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-neutral-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-xs font-semibold text-neutral-400 uppercase tracking-widest">
        
        <p>&copy; {new Date().getFullYear()} Colours Photobooks Press.</p>
        
        <p className="flex items-center gap-2">
          Printed in True Colours <span className="w-2 h-2 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 hidden md:inline-block"></span>
        </p>

        <p className="flex items-center gap-1.5">
          Designed by{" "}
          <a 
            href="https://optimawebdesign.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-cyan-500 transition-colors border-b border-transparent hover:border-cyan-500"
          >
            Optima Web Design
          </a>
        </p>

      </div>
    </footer>
  );
}