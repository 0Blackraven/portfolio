"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "./ui/badge"
import { SiGithub } from "react-icons/si"
import Image from "next/image"

const projects =[
  {
  index: 1,
  title: "Codenames",
  description: "A clone of the famous team vs team guessing game",
  image: "/project-management-dashboard.png",
  gitlink: "https://github.com/0Blackraven/codenames",
  deployedLink: "https://codename-olive.vercel.app/",
  tech: ["React.js", "Tailwind CSS", "TypeScript", "Node.js", "Socket.io"],
  },]

export function Projects() {


  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-24">
      <div className="space-y-6">
        <div className="flex justify-center">
          <h2 id="projects-title" className="text-2xl md:text-3xl font-semibold tracking-tight md:mb-10">
            My Works !!
          </h2>
        </div>
        <div className="flex justify-center">
        <div className = "grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
              
              <Card className="h-full " key={p.index}>
                <CardHeader>
                  <div className="flex justify-center">
                    <Image
                      src={p.image || "/placeholder.svg"}
                      width={90}
                      height={60}
                      alt={`${p.title} screenshot`}
                      className="w-[90%] h-60 object-cover rounded-md ring-1 ring-border"
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <CardTitle className="text-balance"><div className="flex justify-center">{p.title}</div></CardTitle>
                  <div className="flex justify-center"><p>{p.description}</p></div>
                  <div className="flex justify-center mb-10">
                    {p.tech.map((tech)=>(
                      <Badge variant="secondary" className="mr-1 ml-1" key={tech}>{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex justify-evenly p-6 flex-row gap-10">
                    <a href={p.gitlink} className="pointer-events-auto"><SiGithub/></a>
                    <a href={p.deployedLink} className="pointer-events-auto"><SiGithub/></a>
                  </div>
                </CardContent>
              </Card>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
