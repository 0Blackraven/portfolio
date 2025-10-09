"use client"

import { useState, useEffect } from "react"
import { ThemeButton } from "./ui/themeButton"
import { MyHamburger } from "./ui/hamburger";

const sections = ["About", "Projects", "Contact"];

export function SiteHeader() {

  const [activeScreen, setActiveScreen] = useState("hero");

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
      <div className="container mx-auto h-16 md: px-[8%] flex items-center justify-between">
        <nav className="font-semibold tracking-tight">
          <a href="#hero" className="text-balance text-xl md: text-2xl">0BlackRaven</a>
        </nav>

        <nav aria-label="Main navigation"className="">
            <div className="flex flex-row items-center md:gap-6 hidden md:block">
              {
                sections.map(sec => (
                  <a href={`#${sec.toLowerCase()}`} className={`text-sm md: text-xl mx-4 underline-offset-4 ${activeScreen == sec ? "underline" : ""} `} key={sec}>
                    {sec}
                  </a>
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
