"use client";

import { GithubIcon, ExternalLinkIcon } from "@/components/ui/icons";
import Image from "next/image";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

const projects = [
  {
    index: 1,
    title: "Codenames",
    description: "A clone of the famous team vs team guessing game",
    image: "/codenames.png",
    gitlink: "https://github.com/0Blackraven/codenames",
    deployedLink: "https://codename-olive.vercel.app/",
    tech: ["React.js", "Tailwind", "TypeScript", "Node.js", "Socket.io"],
  },
  {
    index: 2,
    title: "RLox Interpreter",
    description: "A Tree-Walk Interpreter in Rust",
    image: "/Screenshot 2026-06-11 105643.png",
    gitlink: "https://github.com/0Blackraven/MyInterpreter",
    tech: ["Rust", "Crossterm"],
  },
  {
    index: 3,
    title: "Web Scrapper",
    description: "A webscrapper built in Go",
    image: "/Screenshot 2026-06-11 105806.png",
    gitlink: "https://github.com/0Blackraven/webscrapper",
    tech: ["Go", "Redis", "Goquery"],
  },
  {
    index: 4,
    title: "Moshi Moshi",
    description: "A website design using GSAP animations",
    image: "/Screenshot 2026-07-08 132820.png",
    gitlink: "https://github.com/0Blackraven/MoshiMoshi",
    deployedLink: "https://moshi-moshi-virid.vercel.app/",
    tech: ["GSAP", "React"],
  },
];

const headingReveal: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-20 pb-10 "
    >
      <div className="container mx-auto px-5 md:px-8 space-y-8 md:space-y-10">
        <motion.h2
          id="projects-title"
          className="sekuya-regular text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter text-foreground border-b border-foreground pb-8"
          variants={headingReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          Selected Works.
        </motion.h2>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => {
            const isHovered = hovered === p.index;

            return (
              <motion.div
                key={p.index}
                className="group flex flex-col border-b border-foreground lg:border-b-0 lg:border-r last:border-r-0 last:border-b-0 p-4 md:p-0"
                onMouseEnter={() => setHovered(p.index)}
                onMouseLeave={() => setHovered(null)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.1,
                }}
              >
                {/* Number + image reveal area */}
                <div className="relative aspect-[4/5] sm:aspect-[2/3] flex items-center justify-center cursor-pointer">
                  {/* Project image — permanently visible on mobile, revealed on hover on lg screens */}
                  <div className="absolute inset-0 overflow-hidden opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                    <Image
                      src={p.image}
                      fill
                      alt={p.title}
                      className="object-cover blur-sm scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Dark overlay so text remains legible */}
                    <div className="absolute inset-0 bg-foreground/60" />
                  </div>

                  {/* Large number — hidden on mobile, visible on desktop */}
                  <span className="hidden lg:block sekuya-regular text-[10rem] leading-none select-none relative z-10 transition-colors duration-500 text-foreground group-hover:text-background">
                    {p.index}
                  </span>

                  {/* Bottom overlay: title, description, tech, links */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-4 md:p-5">
                    {/* Tech tags — always visible on mobile, visible on hover on lg */}
                    <div className="flex flex-wrap gap-1.5 mb-3 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 lg:delay-150">
                      {p.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest border border-background/40 px-2 py-0.5 text-background"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Title + links row */}
                    <div className="flex items-end justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="font-mono text-sm font-bold uppercase tracking-widest truncate transition-colors duration-500 text-background lg:text-foreground group-hover:text-background">
                          {p.title}
                        </h3>
                        <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest mt-1 line-clamp-1 transition-colors duration-500 text-background/70 lg:text-muted-foreground group-hover:text-background/70">
                          {p.description}
                        </p>
                      </div>
                      <div className="flex gap-3 shrink-0">
                        <a
                          href={p.gitlink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-all duration-500 hover:opacity-50 text-background lg:text-foreground group-hover:text-background"
                        >
                          <GithubIcon />
                        </a>
                        {p.deployedLink && (
                          <a
                            href={p.deployedLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-all duration-500 hover:opacity-50 text-background lg:text-foreground group-hover:text-background"
                          >
                            <ExternalLinkIcon />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
