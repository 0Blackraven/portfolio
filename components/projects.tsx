"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { GithubIcon, ExternalLinkIcon } from "@/components/ui/icons";
import Image from "next/image";
import { useState } from "react";

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
];

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-24 px-[6%]"
    >
      <div className="space-y-6">
        <div className="flex justify-center">
          <h2
            id="projects-title"
            className="text-2xl md:text-3xl font-semibold tracking-tight md:mb-10"
          >
            My Works !!
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Card className="h-full group" key={p.index}>
                <CardHeader>
                  <div className="relative w-full h-full rounded-md overflow-hidden">
                    <Image
                      src={p.image || "/placeholder.svg"}
                      width={3824}
                      height={2012}
                      alt={`${p.title} screenshot`}
                      className="object-cover transition-all duration-500 group-hover:blur-sm"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm"
                    >
                      <div className="flex gap-8">
                        <a
                          href={p.gitlink}
                          target="_blank"
                          className="pointer-events-auto hover:scale-110 transition-transform"
                        >
                          <GithubIcon />
                        </a>
                        <a
                          href={p.deployedLink}
                          target="_blank"
                          className="pointer-events-auto hover:scale-110 transition-transform"
                        >
                          <ExternalLinkIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <CardTitle className="text-balance">
                    <div className="flex justify-center">{p.title}</div>
                  </CardTitle>
                  <div className="flex justify-center">
                    <p>{p.description}</p>
                  </div>
                  <div className="grid grid-cols-3 justify-center gap-2">
                    {p.tech.map((tech) => (
                      <Badge
                        variant="secondary"
                        className="mr-1 ml-1"
                        key={tech}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
