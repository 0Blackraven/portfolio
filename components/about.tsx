import { Pointer } from "lucide-react";


export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-24">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="flex justify-center md:pt-[10%] md:col-span-1">
          <img
            src="./potrait.jpg"
            alt="Portrait of Your Name"
            className="w-40 h-40 md:w-56 md:h-56 rounded-lg object-cover ring-1 ring-border"
          />
        </div>
        <div className="md:col-span-2 space-y-2 md: pr-[10%]">
          <h2 id="about-title" className="text-1xl md:text-3xl font-semibold tracking-tight">
            Joydeep's Bio:
          </h2>
          <p className="text-muted-foreground md:text-xl">
            I’m a full‑stack developer focused on building performant, accessible, and maintainable products. I enjoy
            turning complex problems into simple, beautiful solutions
          </p>
          <div className=" flex flex-col md:flex flex-row gap-2 md: pr-[10%]">
            <h2 className="text-lg md:text-3xl font-semibold tracking-tight">Location:</h2>
            <p className="text-muted-foreground md:text-xl">Assam, India</p>
          </div>
          <div className="flex flex-col flex flex-row gap-2 md: pr-[10%]">
            <h3 className="text-lg md:text-3xl font-semibold tracking-tight">Education:</h3>
            <p className="text-muted-foreground md:text-xl">Currently pursuing B.Tech from 
              <a href="https://kiit.ac.in/" target="_blank" className="text-muted-foreground"> KIIT,Bhubaneshwar</a>
            </p>
          </div>
          <div className="flex flex-col flex flex-row gap-2">
            <h3 className="text-lg md:text-3xl font-medium">Interests:</h3>
            <p className="text-muted-foreground md:text-xl">Games, Writing, Coding, .... yes i am boring</p>
          </div>
        </div>
      </div>
    </section>
  )
}
