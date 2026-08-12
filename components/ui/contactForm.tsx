"use client"

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: name === "service" ? Number(value) : value,
    }))
  }

  const inputClass = "w-full bg-transparent border-0 border-b border-foreground/30 focus:border-foreground rounded-none px-0 py-3 font-mono uppercase tracking-widest text-xs md:text-sm outline-none transition-colors placeholder:text-muted-foreground"

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-8">
        <input
          name="name"
          id="name"
          placeholder="Name *"
          required
          onChange={handleChange}
          value={data.name}
          className={inputClass}
        />
        <input
          name="email"
          id="email"
          placeholder="Email *"
          required
          onChange={handleChange}
          value={data.email}
          className={inputClass}
        />
        <input
          name="number"
          id="number"
          placeholder="Mobile Number"
          onChange={handleChange}
          value={data.number ?? ""}
          className={inputClass}
        />
        <select
          name="service"
          id="service"
          value={data.service ?? ""}
          onChange={handleChange}
          required
          className={cn(inputClass, "appearance-none")}
        >
          <option value="" disabled>Select a service *</option>
          <option value={serviceType.FullStack}>Fullstack</option>
          <option value={serviceType.BackEnd}>Backend</option>
          <option value={serviceType.FrontEnd}>Frontend</option>
          <option value={serviceType.Others}>Others</option>
        </select>
        <textarea 
          name="message"
          id="message"
          placeholder="Message *"
          required
          onChange={handleChange}
          className={cn(inputClass, "min-h-[120px] resize-none")}
          value={data.message}
        />
      </div>

      <button type="submit" className="w-full bg-foreground text-background font-mono uppercase tracking-widest text-sm font-bold py-5 px-8 hover:opacity-90 transition-opacity" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  )
}
