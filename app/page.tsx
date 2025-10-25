"use client"

import React, { useState } from 'react';
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import LiquidEther from '@/components/LiquidEther';
import { SiteFooter } from '@/components/site-footer';
import { useTheme } from 'next-themes';

export default function HomePage() {
  const {setTheme, resolvedTheme} = useTheme();
  const theme = resolvedTheme === "dark" ? "dark" : "light";
  const lightColors = ['#5227FF', '#FF9FFC', '#B19EEF'];
  const darkColors = ['#A43737', '#F70202', '#000000'];

  return (
    <div className="w-full relative overflow-hidden h-screen">
      <LiquidEther
        className="fixed inset-0 z-0"
        style={
          { width: '100vw', height: '100vh'}}
          colors = {(theme === "dark")?darkColors:lightColors}
      />
        <div className="absolute inset-0 z-10 overflow-y-auto h-screen" style={{userSelect:"none"}}>
          <SiteHeader />
          <main id="main" className="container mx-auto px-4 py-10 md:py-16 space-y-20">
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
          <SiteFooter/>
        </div>
      </div>

  );
}