"use client"

import { ContactForm } from "./ui/contactForm"
import { GithubIcon, LinkedinIcon, InstaIcon, XIcon } from "./ui/icons";
import { motion, Variants } from "framer-motion";

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
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

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 pb-20 md:pb-32">
      <motion.div
        className="container mx-auto px-5 md:px-8 space-y-10 md:space-y-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.h2
          id="contact-title"
          className="sekuya-regular text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter text-foreground border-b border-foreground pb-8"
          variants={childFade}
        >
          Let's talk.
        </motion.h2>
        
        <motion.div className="grid md:grid-cols-2 gap-12 md:gap-16" variants={childFade}>
          <div className="space-y-8 md:space-y-12">
            <p className="font-mono text-sm md:text-lg tracking-widest uppercase text-foreground leading-relaxed">
              I'm currently open to new opportunities and collaborations. Drop a line.
            </p>
            <div className="flex gap-8 pointer-events-auto">
              <a href="https://github.com/0Blackraven" className="hover:opacity-50 transition-opacity"><GithubIcon className="w-8 h-8" /></a>
              <a href="https://www.linkedin.com/in/joydeep-das-a2255132a" className="hover:opacity-50 transition-opacity"><LinkedinIcon className="w-8 h-8" /></a>
              <a href="https://www.instagram.com/joy____deep/#" className="hover:opacity-50 transition-opacity"><InstaIcon className="w-8 h-8" /></a>
              <a href="https://x.com/BlackRaven___" className="hover:opacity-50 transition-opacity"><XIcon className="w-8 h-8" /></a>
            </div>
          </div>
          
          <div className="pointer-events-auto w-full">
            <ContactForm/>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
