"use client"

import { useEffect, useState, type MouseEvent } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { sendGAEvent } from "@next/third-parties/google"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
]

type ActiveNav = "Home" | "About" | "Services" | "Projects" | "Contact"

const sectionToNav: Record<string, ActiveNav> = {
  about: "About",
  services: "Services",
  "featured-work": "Projects",
  contact: "Contact",
}

function getRouteActiveNav(pathname: string): ActiveNav {
  if (pathname === "/about") {
    return "About"
  }

  if (pathname.startsWith("/services")) {
    return "Services"
  }

  if (pathname.startsWith("/projects")) {
    return "Projects"
  }

  return "Home"
}

export function Navbar() {
  const pathname = usePathname()

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState<ActiveNav>("Home")

  const displayedActiveNav =
    pathname === "/" ? activeNav : getRouteActiveNav(pathname)

  const handleSectionClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href === "/#contact") {
      sendGAEvent("event", "contact_cta_click", {
        cta_location: "navbar",
      })
    }

    if (href === "/" && pathname === "/") {
      event.preventDefault()

      setActiveNav("Home")
      setMenuOpen(false)

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })

      return
    }

    if (!href.startsWith("/#") || pathname !== "/") {
      return
    }

    event.preventDefault()

    const sectionId = href.slice(2)
    const section = document.getElementById(sectionId)

    if (section) {
      setActiveNav(sectionToNav[sectionId] ?? "Home")

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }

    setMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (pathname !== "/") {
      return
    }

    const sectionIds = ["about", "services", "featured-work", "contact"]

    const updateActiveSection = () => {
      if (window.scrollY < 120) {
        setActiveNav("Home")
        return
      }

      const scrollPosition = window.scrollY + 140
      let currentSection: ActiveNav = "Home"

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId)

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sectionToNav[sectionId]
        }
      }

      setActiveNav(currentSection)
    }

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    })

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
    }
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl shadow-[0_1px_0_0_var(--border)]"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-18 w-full max-w-300 items-center justify-between px-5 md:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className={cn(
            "rounded-md text-base font-semibold tracking-tight transition-colors duration-200",
            displayedActiveNav === "Home"
              ? "text-primary"
              : "hover:text-primary",
          )}
          onClick={(event) => handleSectionClick(event, "/")}
          aria-current={displayedActiveNav === "Home" ? "location" : undefined}
        >
          Abdul Rehman
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = displayedActiveNav === item.label

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={(event) => handleSectionClick(event, item.href)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors duration-200",
                  isActive
                    ? "bg-primary/5 text-primary"
                    : "text-muted-foreground hover:bg-primary/5 hover:text-foreground",
                )}
                aria-current={isActive ? "location" : undefined}
              >
                {item.label}
              </Link>
            )
          })}

          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={cn(
          "border-t border-border/70 bg-background/95 backdrop-blur-xl lg:hidden",
          menuOpen ? "block" : "hidden",
        )}
      >
        <div className="mx-auto flex max-w-300 flex-col px-5 py-4">
          {navItems.map((item) => {
            const isActive = displayedActiveNav === item.label

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={(event) => handleSectionClick(event, item.href)}
                className={cn(
                  "border-b border-border/50 px-1 py-4 text-sm font-medium transition-colors last:border-b-0",
                  isActive
                    ? "bg-primary/5 text-primary"
                    : "text-muted-foreground hover:text-primary",
                )}
                aria-current={isActive ? "location" : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </header>
  )
}
