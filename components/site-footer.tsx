import { GithubIcon, InstaIcon, LinkedinIcon, XIcon } from "@/components/ui/icons"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-[6%] py-8 flex flex-col space-y-4 md:flex-row md:space-y-0 text-sm text-muted-foreground flex items-center justify-between">
        <p>
          Built with <span className="font-mono">Next.js</span> by Joydeep Das
        </p>

        <div className="flex flex-col gap-3">
          {/* <p className="text-lg md:text-xl font-semibold tracking-tight">My Social Handles:</p> */}
          <div className="flex gap-3 justify-center md:justify-start">
            <a 
              href="https://www.instagram.com/joy____deep/#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Visit my Instagram profile"
            >
              <InstaIcon/>
            </a>
            <a 
              href="https://www.linkedin.com/in/joydeep-das-a2255132a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Visit my LinkedIn profile"
            >
              <LinkedinIcon/>
            </a>
            <a 
              href="https://github.com/0Blackraven" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Visit my GitHub profile"
            >
              <GithubIcon/>
            </a>
            <a 
              href="https://x.com/BlackRaven___" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Visit my X (Twitter) profile"
            >
              <XIcon/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
