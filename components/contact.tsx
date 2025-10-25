"use client"

import { ContactForm } from "./ui/contactForm"
import { GithubIcon, LinkedinIcon, InstaIcon, XIcon } from "./ui/icons";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24">
      <div className="max-w-2xl space-y-6 flex flex-col px-[6%]">
        <h2 id="contact-title" className="text-2xl md:text-4xl font-semibold tracking-tight">
          Let&apos;s get in touch!
        </h2>
        <p className="text-muted-foreground md:text-2xl tracking-tight">
          I&apos;m currently open to new opportunities and collaborations. Feel free to reach out
        </p>
        <ContactForm/>
        
      </div>
    </section>
  )
}
