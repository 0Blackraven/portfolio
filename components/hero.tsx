"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="pt-6 md:pt-10 scroll-mt-16 ">
      <div className="mx-auto max-w-3xl text-center space-y-6">
        <h1 id="hero-title" className="text-2xl md:text-6xl font-bold tracking-tight text-balance text-center">
          Hey, I’m Joydeep and<br /> I love to sleep And Code Too
        </h1>
        <p className="text-muted-foreground md:text-2xl text-pretty">
          I build now so I can sleep later 😴
        </p>

        <div className="flex items-center justify-center gap-3 pointer-events-auto">
          <Button asChild>
            <a href="#projects">My Works</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="https://drive.google.com/file/d/1GQNf9pL1fiWuBUEyReMRZa9213osUK5F/view" target="blank"> Resume </a>
          </Button>

        </div>
      </div>
    </section>
  )
}
