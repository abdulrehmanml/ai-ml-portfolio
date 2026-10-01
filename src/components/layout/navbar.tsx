"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/layout/theme-toggle"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Featured Work", href: "/#featured-work" },
  { label: "Contact", href: "/#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSectionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("/#") || window.location.pathname !== "/") {
      return
    }

    event.preventDefault()

    const sectionId = href.slice(2)
    const section = document.getElementById(sectionId)

    if (section) {
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

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
        className="mx-auto flex h-18 w-full max-w-[1200px] items-center justify-between px-5 md:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-base font-semibold tracking-tight transition-colors hover:text-primary"
          onClick={() => setMenuOpen(false)}
        >
          Abdul Rehman
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(event) => handleSectionClick(event, item.href)}
              className="rounded-md px-3 py-2 text-sm text-foreground/75 transition-colors duration-200 hover:bg-primary/5 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}

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
        <div className="mx-auto flex max-w-[1200px] flex-col px-5 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(event) => handleSectionClick(event, item.href)}
              className="border-b border-border/50 px-1 py-4 text-sm font-medium text-foreground/80 transition-colors hover:text-primary last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
