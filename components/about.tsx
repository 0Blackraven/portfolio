"use client"

import Image from "next/image"
import { motion, Variants } from "framer-motion"

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const childFade: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-20 border-y border-foreground">
      <div className="container mx-auto px-5 md:px-8 py-16 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 md:gap-24 items-start">
          
          <motion.div
            className="md:col-span-7 flex flex-col justify-center space-y-8 md:space-y-16 order-2 md:order-1 pt-4 md:pt-0"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2
              id="about-title"
              className="sekuya-regular text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter text-foreground border-b border-foreground pb-8"
              variants={childFade}
            >
              Biography.
            </motion.h2>
            <motion.p
              className="font-mono text-sm md:text-base leading-relaxed text-foreground uppercase tracking-widest max-w-2xl"
              variants={childFade}
            >
              I'm a full stack developer focused on building performant, accessible, and maintainable products. I enjoy turning complex problems into simple, beautiful solutions.
            </motion.p>
            
            <motion.div
              className="grid grid-cols-2 gap-6 md:gap-8 pt-8 border-t border-foreground/30 font-mono text-[10px] md:text-xs uppercase tracking-widest"
              variants={childFade}
            >
              <div className="flex flex-col gap-3">
                <span className="text-muted-foreground">Location</span>
                <span className="text-foreground font-bold">Assam, India</span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-muted-foreground">Education</span>
                <span className="text-foreground font-bold">B.Tech, KIIT</span>
              </div>
              <div className="flex flex-col gap-3 col-span-2">
                <span className="text-muted-foreground">Interests</span>
                <span className="text-foreground font-bold">Games, Writing, Coding</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:col-span-5 order-1 md:order-2 w-full md:-mt-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div className="relative aspect-[4/5] w-full border border-foreground p-3">
              <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-1000">
                <Image
                  src="/potrait.png"
                  alt="Portrait of Joydeep"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
