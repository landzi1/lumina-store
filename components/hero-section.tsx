"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section ref={targetRef} className="h-[200vh] relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div style={{ opacity, y }} className="z-10 text-center px-4">
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-400">
            Lumina Pro
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto">
            Doświadcz dźwięku w jego najczystszej postaci.
          </p>
        </motion.div>

        <motion.div 
          style={{ scale }}
          className="absolute inset-0 -z-10 flex items-center justify-center"
        >
          {/* Symulacja produktu - w produkcji użyj Image */}
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-gray-100 to-gray-200 blur-3xl opacity-50" />
          <img 
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop" 
            alt="Hero Headphones" 
            className="relative w-full max-w-3xl object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
