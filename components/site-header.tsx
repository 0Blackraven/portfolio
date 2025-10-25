"use client"

import { useState, useEffect } from "react"
import { ThemeButton } from "./ui/themeButton"
import { MyHamburger } from "./ui/hamburger";
import { Button } from "./ui/button";

const sections = ["About", "Projects", "Contact"];

export function SiteHeader() {

  // const [activeScreen, setActiveScreen] = useState("hero");
  const [open, setOpen] = useState(false);

  // useEffect(()=>{
  //   const handleScroll = () =>{
  //     let current = sections[0];
  //     sections.forEach(id =>{
  //       const element = document.getElementById(id);
  //       if(element){
  //         const sectionTop = element.offsetTop - 80;
  //         if(window.scrollY >= sectionTop){
  //           current = id ;
  //         }
  //       }
  //     })
  //     setActiveScreen(current)
  //   }
  //   window.addEventListener("scroll",handleScroll)
  //   return () => window.removeEventListener("scroll",handleScroll)
  // },[]);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto h-16 md: px-[8%] flex items-center justify-between border-black">
        <nav className="font-semibold tracking-tight">
          <a href="#hero" className="text-balance text-xl md: text-2xl">0BlackRaven</a>
        </nav>

        <nav aria-label="Main navigation" className="">
          <div className="hidden md:flex flex-row items-center gap-6 pointer-events-auto hover:cursor-pointer">
            {
              sections.map(sec => (
                <div
                  className={`text-sm md: text-xl mx-4 underline-offset-4`} 
                  key={sec}
                  onClick={()=> {
                    setOpen(false); 
                    document.getElementById(`${sec.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })}}
                >
                  {sec}
                </div>
              ))}
          </div>
        </nav>
        <div className="flex flex-row">
          <ThemeButton />
          <MyHamburger />
        </div>
      </div>
    </header>
  )
}
