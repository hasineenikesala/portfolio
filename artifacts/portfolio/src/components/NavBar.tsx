import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function NavBar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple scrollspy
      const sections = links.map(link => document.getElementById(link.href.substring(1)));
      let currentId = "home";
      
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentId = section.id;
            break;
          }
        }
      }
      setActive(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => handleClick(e, "#home")}
          className="text-2xl font-bold font-mono tracking-tighter text-glow-primary text-primary"
        >
          HN_
        </a>
        
        <div className="hidden md:flex items-center space-x-1">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={cn(
                "px-4 py-2 text-sm font-mono tracking-wider transition-all duration-300 rounded-md relative",
                active === link.href.substring(1) 
                  ? "text-primary text-glow-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              )}
            >
              {link.label}
              {active === link.href.substring(1) && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary box-glow-primary" />
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
