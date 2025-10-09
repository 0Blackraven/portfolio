"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "./ui/badge"
// import { ProjectDialog } from "./ui/projectDialog"
import { SiGithub } from "react-icons/si"

const projects =[
  {
  title: "Project One",
  description: "A responsive web application demonstrating clean UI and fast performance.",
  image: "/project-management-dashboard.png",
  gitlink: "#",
  deployedLink: "",
  tech: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
  title: "Project Two",
  description: "Full‑stack Next.js app with authentication and a polished design system.",
  image: "/project-management-dashboard.png",
  gitlink: "#",
  deployedLink: "",
  tech: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  { 
  title: "Project Three",
  description: "Data visualization dashboard featuring accessible charts and interactions.",
  image: "/project-management-dashboard.png",
  gitlink: "#",
  deployedLink: "",
  tech: ["Next.js", "Tailwind CSS", "TypeScript"],
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
          {projects.map((p,idx) => (
              
              <Card className="h-full " key={idx}>
                <CardHeader>
                  <div className="flex justify-center">
                    <img
                      src={p.image || "/placeholder.svg"}
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
                      <Badge variant="secondary" className="mr-1 ml-1">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex justify-evenly p-6 flex-row gap-10">
                    <a href={p.gitlink}><SiGithub/></a>
                    <a href={p.deployedLink}><SiGithub/></a>
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
