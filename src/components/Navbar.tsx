import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Documentation", href: "#documentation" },
  { label: "Pricing", href: "#pricing" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#about" },
]

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 lg:px-16 py-5 backdrop-blur-sm bg-hero-bg/80 border-b border-border/50">
      <div className="flex items-center justify-between max-w-full mx-auto">
        {/* Left: Logo */}
        <div className="flex items-center gap-1">
          <span className="text-foreground text-xl font-semibold tracking-tight">S1</span>
          <span className="text-primary text-xl font-semibold tracking-tight">CHAT</span>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: CTA Button */}
        <div className="hidden md:inline-flex">
          <Button variant="navCta" className="uppercase text-xs tracking-widest px-6 py-2 rounded-lg" asChild>
            <a href="#trial">Start Chatting</a>
          </Button>
        </div>
      </div>
    </nav>
  )
}