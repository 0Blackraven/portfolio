"use client"

import { ContactForm } from "./ui/contactForm"
import { GithubIcon, LinkedinIcon, InstaIcon, XIcon } from "./ui/icons";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24">
      <div className="max-w-2xl space-y-6">
        <h2 id="contact-title" className="text-2xl md:text-4xl font-semibold tracking-tight">
          Let&apos;s get in touch!
        </h2>
        <p className="text-muted-foreground md:text-2xl tracking-tight">
          I&apos;m currently open to new opportunities and collaborations. Feel free to reach out
        </p>
        <ContactForm/>
        <div className="flex flex-col gap-3">
          <p className="text-lg md:text-xl font-semibold tracking-tight">My Social Handles:</p>
          <div className="flex gap-3 justify-center md:justify-start">
            <a 
              href="https://www.instagram.com/joy____deep/#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Visit my Instagram profile"
            >
              <InstaIcon/>
            </a>
            <a 
              href="https://www.linkedin.com/in/joydeep-das-a2255132a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Visit my LinkedIn profile"
            >
              <LinkedinIcon/>
            </a>
            <a 
              href="https://github.com/0Blackraven" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Visit my GitHub profile"
            >
              <GithubIcon/>
            </a>
            <a 
              href="https://x.com/BlackRaven___" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Visit my X (Twitter) profile"
            >
              <XIcon/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
