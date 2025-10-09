export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8 text-sm text-muted-foreground flex items-center justify-between">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p>
          Built with <span className="font-mono">Next.js</span>
        </p>
      </div>
    </footer>
  )
}
