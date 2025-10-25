"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { sendMail } from "@/lib/sendMail"

export enum serviceType {
    FullStack,
    BackEnd,
    FrontEnd,
    Others,
  }


export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [touched, setTouched] = useState<string[]>([])
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "" as string | number,
    service: null as serviceType | null,
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    if (!data.name || !data.email || data.service === null || !data.message) {
      alert("Please fill all required fields")
      setIsLoading(false)
      return
    }

    const res = await sendMail(data);
    if(res.success){
      alert("Message sent successfully");
      setData({ name: "", email: "", number: "", service: null, message: "" });
    } else {
      alert("Something went wrong");
    }

    setIsLoading(false)
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    if (!touched.includes(e.target.name)) {
      setTouched((prev) => [...prev, e.target.name])
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: name === "service" ? Number(value) : value,
    }))
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="pointer-events-auto w-[20%]">Lets Talk</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md: min-w-[38%] md: min-h-[80%]">
        <DialogHeader className="items-center justify-center">
          <DialogTitle className="md:text-2xl">Lets Work Together</DialogTitle>
          <DialogDescription className="md:text-xl text-center">
            Have a project in mind or simply want to connect? <br/>Fill out the form
            and I&apos;ll get back to you as soon as I can 
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 space-y-4 items-justify">

            <div className="grid gap-3">
              <Input
                name="name"
                id="name"
                placeholder="Name"
                aria-invalid={touched.includes("name") && !data.name}
                onBlur={handleBlur}
                required
                onChange={handleChange}
                value={data.name}
                className="md:text-xl"
              />
            </div>

            <div className="grid gap-3">
              <Input
                name="email"
                id="email"
                placeholder="Email"
                aria-invalid={touched.includes("email") && !data.email}
                onBlur={handleBlur}
                required
                onChange={handleChange}
                value={data.email}
                className="md:text-xl"
              />
            </div>

            <div className="grid gap-3">
              <Input
                name="number"
                id="number"
                placeholder="Mobile Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={data.number ?? ""}
                className="md:text-xl"
              />
            </div>

            <div className="grid gap-3">
              <select
                name="service"
                id="service"
                value={data.service ?? ""}
                onChange={handleChange}
                required
                onBlur={handleBlur}
                className="border rounded px-3 py-2 md:text-xl"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value={serviceType.FullStack}>Fullstack</option>
                <option value={serviceType.BackEnd}>Backend</option>
                <option value={serviceType.FrontEnd}>Frontend</option>
                <option value={serviceType.Others}>Others</option>
              </select>
            </div>

            <div className={cn("grid gap-3 rounded-lg p-2")}>
              <textarea 
                name="message"
                id="message"
                placeholder="Type your message .... "
                aria-invalid={touched.includes("message") && !data.message}
                onBlur={handleBlur}
                onChange={handleChange}
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm 
                placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
                disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 
                dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive md:text-xl"
                value={data.message}
              />
            </div>

            <div className="flex justify-center">
              <Button type="submit" className="w-full md: max-w-[30%]" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
