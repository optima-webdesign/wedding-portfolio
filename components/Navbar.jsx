"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; 
import { portfolioData } from "@/lib/data";
import { FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Gallery");

  const phone = portfolioData?.contact?.phone || "919898697991";
  const whatsappMessage = portfolioData?.contact?.whatsappMessage || "Hi, I want to inquire about photobook printing.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;

  const navLinks = [
    { name: "Gallery", href: "/portfolio" },
    { name: "Offers", href: "/#offers" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const cmykGradient = "bg-linear-to-r from-cyan-500 via-blue-500 via-red-500 to-yellow-400";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-neutral-100 py-3 lg:py-4"
            : "bg-transparent py-5 lg:py-6"
        }`}
      >
        <div className="max-w-360 mx-auto px-5 md:px-8 flex items-center justify-between gap-4 lg:gap-12">
          
          <Link
            href="/"
            onClick={() => setActiveLink("")}
            className="flex items-center gap-3 shrink-0 group hover:opacity-90 transition-opacity"
          >
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
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-12 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className="relative text-[13px] font-bold text-neutral-600 hover:text-neutral-900 uppercase tracking-widest transition-colors py-1 group"
              >
                {link.name}
                <AnimatePresence>
                  {activeLink === link.name ? (
                    <motion.div
                      layoutId="nav-underline"
                      className={`absolute left-0 -bottom-1 h-[2.5px] w-full ${cmykGradient} rounded-full`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    <div className="absolute left-0 -bottom-1 h-[2.5px] w-0 bg-neutral-900 transition-all duration-300 group-hover:w-full rounded-full" />
                  )}
                </AnimatePresence>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5 shrink-0">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2.5 bg-neutral-900 text-white px-7 py-3 rounded-full text-sm font-semibold transition-all relative overflow-hidden group shadow-lg shadow-neutral-900/10 hover:shadow-xl active:scale-95"
            >
              <div className={`absolute inset-0 ${cmykGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`}></div>
              <FaWhatsapp className="text-xl relative z-10" />
              <span className="uppercase tracking-wider text-[12px] relative z-10">Inquire Now</span>
            </a>

            <button
              className="md:hidden text-2xl text-neutral-900 p-2 -mr-2 focus:outline-none active:scale-90 transition-transform"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Toggle Menu"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-100 bg-white/95 backdrop-blur-2xl flex flex-col px-6 py-8 md:hidden overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-16 border-b border-neutral-100 pb-6 mt-2">
              
              <Link 
                href="/" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="flex items-center gap-3"
              >
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neutral-200 shadow-sm shrink-0">
                  <Image 
                    src="/colourslogo.png" 
                    alt="Colours Logo Icon" 
                    fill
                    className="object-cover" 
                  />
                </div>
                
                <div className="relative w-28 h-8 shrink-0">
                  <Image 
                    src="/coloursweb.png" 
                    alt="Colours Typography" 
                    fill 
                    className="object-contain object-left" 
                  />
                </div>
              </Link>
              
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl text-neutral-400 p-2 -mr-2 hover:text-neutral-900 transition-colors focus:outline-none"
              >
                <FiX />
              </button>
            </div>

            <div className="flex flex-col gap-6 text-2xl font-black">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`transition-colors font-sans uppercase tracking-widest pb-4 border-b border-neutral-100 flex items-center justify-between group ${
                    activeLink === link.name ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-900"
                  }`}
                >
                  {link.name}
                  {activeLink === link.name && (
                    <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></span>
                  )}
                </Link>
              ))}
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-3 bg-neutral-900 text-white w-full mt-auto mb-6 py-5 rounded-2xl font-bold text-lg transition-transform active:scale-95 shadow-xl shadow-neutral-900/10 relative overflow-hidden group`}
            >
              <div className={`absolute inset-0 ${cmykGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`}></div>
              <FaWhatsapp className="text-2xl relative z-10" />
              <span className="uppercase tracking-wider text-sm relative z-10">
                Chat on WhatsApp
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}