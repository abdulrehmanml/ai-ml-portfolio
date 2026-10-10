"use client"

import { useEffect, useState, useSyncExternalStore } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

const emptySubscribe = () => () => {}
const THEME_HINT_KEY = "dark-mode-hint-seen"

export function ThemeToggle() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  )

  const { resolvedTheme, setTheme } = useTheme()
  const [dismissed, setDismissed] = useState(false)

  const isDark = resolvedTheme === "dark"

  const showHint =
    mounted &&
    !isDark &&
    !dismissed &&
    localStorage.getItem(THEME_HINT_KEY) !== "true"

  useEffect(() => {
    if (!mounted || isDark || dismissed) return

    if (localStorage.getItem(THEME_HINT_KEY) === "true") return

    const timer = window.setTimeout(() => {
      localStorage.setItem(THEME_HINT_KEY, "true")
      setDismissed(true)
    }, 5000)

    return () => window.clearTimeout(timer)
  }, [mounted, isDark, dismissed])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled aria-label="Toggle theme">
        <span className="size-4" aria-hidden="true" />
      </Button>
    )
  }

  const handleThemeToggle = () => {
    localStorage.setItem(THEME_HINT_KEY, "true")
    setDismissed(true)
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <div className="relative">
      {showHint && (
        <div
          className="absolute right-0 top-full z-50 mt-3 w-52 rounded-lg border border-border bg-card px-3 py-2.5 text-left text-xs leading-5 text-foreground shadow-lg"
          role="status"
        >
          <p className="font-medium text-foreground">Dark mode available</p>

          <p className="mt-0.5 text-muted-foreground">
            Use the moon icon to switch.
          </p>

          <span
            className="absolute -top-1.5 right-4 size-3 rotate-45 border-l border-t border-border bg-card"
            aria-hidden="true"
          />
        </div>
      )}

      <Button
        variant="ghost"
        size="icon"
        onClick={handleThemeToggle}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? (
          <Sun className="size-4" aria-hidden="true" />
        ) : (
          <Moon className="size-4" aria-hidden="true" />
        )}
      </Button>
    </div>
  )
}
