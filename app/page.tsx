"use client"

import React from 'react';
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { SiteFooter } from '@/components/site-footer';

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col" style={{userSelect:"none"}}>
      <SiteHeader />
      <main id="main" className="container mx-auto px-4 md:px-8 py-8 md:py-16 space-y-20 md:space-y-40 flex-grow">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <SiteFooter/>
    </div>
  );
}