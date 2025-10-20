"use client"

import React, { useState } from 'react';
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import LiquidEther from '@/components/LiquidEther';

export default function HomePage() {

  return (
    <div className="w-full relative overflow-hidden h-screen">
      <LiquidEther
        className="fixed inset-0 z-0"
        style={{ width: '100vw', height: '100vh' }}
      />
        <div className="absolute inset-0 z-10 overflow-y-auto h-screen"
        style={{
          // pointerEvents: 'none',
          userSelect: 'none',
          // touchAction: 'pan-y',
        }}>
          <SiteHeader />
          <main id="main" className="container mx-auto px-4 py-10 md:py-16 space-y-20">
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
        </div>
      </div>

  );
}