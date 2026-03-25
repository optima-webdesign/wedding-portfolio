"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const progressRef = useRef(null);
  const [percent, setPercent] = useState(0);

  const cmykGradient = "bg-linear-to-r from-cyan-500 via-blue-500 via-red-500 to-yellow-400";

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete(), 
    });

    tl.fromTo(
      contentRef.current,
      { opacity: 0, scale: 0.95, y: 10 },
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    
    .to(progressRef.current, {
      width: "100%",
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate: function () {
        setPercent(Math.round(this.progress() * 100));
      }
    })
    
    .to(contentRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.6,
      delay: 0.3,
      ease: "power3.in",
    })
    
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "expo.inOut",
    });

  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 bg-white flex flex-col items-center justify-center overflow-hidden"
    >
      <div ref={contentRef} className="text-center flex flex-col items-center relative z-10">
        
        <div className="flex flex-col items-center mb-12">
          <span className="text-5xl md:text-7xl font-black font-sans tracking-tighter text-neutral-900 leading-none flex items-center">
            COL
            <span className="text-transparent bg-clip-text bg-linear-to-tr from-cyan-500 via-blue-500 to-yellow-400 mx-0.5">
              O
            </span>
            URS
          </span>
          <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-neutral-400 uppercase mt-3">
            Photobooks Press
          </span>
        </div>
        
        <div className="flex flex-col items-center w-64 md:w-80">
          <div className="w-full flex justify-between text-[10px] md:text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">
            <span>Loading Modules</span>
            <span className="text-neutral-900">{percent}%</span>
          </div>

          <div className="h-0.5 w-full bg-neutral-100 relative overflow-hidden rounded-full">
            <div 
              ref={progressRef}
              className={`absolute top-0 left-0 h-full w-0 ${cmykGradient} rounded-full`}
            />
          </div>
        </div>

      </div>
    </div>
  );
}