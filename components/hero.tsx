"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      
      {/* Massive name — clips upward into view */}
      <div className="absolute top-[20%] -left-4 md:-left-12 overflow-hidden">
        <motion.h1
          id="hero-title"
          className="sekuya-regular text-[6rem] md:text-[12rem] lg:text-[18rem] leading-none text-foreground tracking-tighter opacity-90 select-none whitespace-nowrap"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 0.9 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3,
          }}
        >
          JOYDEEP DAS
        </motion.h1>
      </div>

      {/* Tagline + links — fade up after name lands */}
      <div className="container mx-auto px-8 relative z-10 flex flex-col items-end justify-end h-full mt-64 md:mt-96 pb-20">
        <motion.div
          className="max-w-lg space-y-12 text-right"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.8,
          }}
        >
          <p className="text-xl md:text-4xl font-mono uppercase tracking-widest text-foreground leading-snug">
            90% figuring it out.<br/>
            10% making it work.
          </p>

          <motion.div
            className="flex items-center justify-end gap-8 pt-8 border-t border-foreground/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <a href="#projects" className="text-sm font-bold font-mono uppercase tracking-widest hover:text-muted-foreground transition-colors">
              [ Works ]
            </a>
            <a href="https://drive.google.com/file/d/1y59u46H8__2HEyEUbxDZdQTkW1SRsOmF/view?usp=drive_link" target="blank" className="text-sm font-bold font-mono uppercase tracking-widest hover:text-muted-foreground transition-colors">
              [ Resume ]
            </a>
          </motion.div>
        </motion.div>
      </div>
      
    </section>
  )
}
