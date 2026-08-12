"use client"

import { useState } from "react"
import { MyHamburger } from "./ui/hamburger";

const sections = ["About", "Projects", "Contact"];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 z-40 w-full pt-8 pb-4">
      <div className="container mx-auto px-8 flex items-center justify-between">
        <nav className="font-bold">
          <a href="#hero" className="text-xl md:text-2xl uppercase tracking-widest font-mono">0BlackRaven</a>
        </nav>

        <nav aria-label="Main navigation" className="hidden md:flex gap-12 font-mono text-sm uppercase tracking-widest">
            {sections.map(sec => (
              <a
                href={`#${sec.toLowerCase()}`}
                className="hover:text-muted-foreground transition-colors" 
                key={sec}
                onClick={(e)=> {
                  e.preventDefault();
                  setOpen(false); 
                  document.getElementById(`${sec.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {sec}
              </a>
            ))}
        </nav>
        <div className="md:hidden flex">
          <MyHamburger />
        </div>
      </div>
    </header>
  )
}
