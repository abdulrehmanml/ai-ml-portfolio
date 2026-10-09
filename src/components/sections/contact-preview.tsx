"use client"

import Link from "next/link"
import type { FormEvent } from "react"
import { useEffect, useState } from "react"
import { ArrowUpRight, Mail, Send } from "lucide-react"
import { SiGithub } from "@icons-pack/react-simple-icons"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { sendGAEvent } from "@next/third-parties/google"

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.94 8.5H3.7V20h3.24V8.5ZM5.32 3A1.9 1.9 0 1 0 5.3 6.8 1.9 1.9 0 0 0 5.32 3ZM20.3 13.41c0-3.46-1.85-5.07-4.32-5.07-2 0-2.9 1.1-3.4 1.88V8.5H9.35V20h3.23v-5.68c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.72 1.85 3.04V20h3.23l.01-6.59Z" />
    </svg>
  )
}

const contactLinks = [
  {
    label: "Email",
    value: "hello.arehmanmughal@gmail.com",
    href: "mailto:hello.arehmanmughal@gmail.com",
    icon: Mail,
    iconClassName: "text-foreground",
  },
  {
    label: "LinkedIn",
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/abdul-rehmanmughal",
    icon: LinkedinIcon,
    iconClassName: "text-[#0A66C2]",
  },
  {
    label: "GitHub",
    value: "GitHub",
    href: "https://github.com/abdulrehmanml",
    icon: SiGithub,
    iconClassName: "text-[#181717] dark:text-white",
  },
]

export function ContactPreview() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{
    type: "success" | "error"
    message: string
  } | null>(null)

  useEffect(() => {
    if (!status) return

    const timer = setTimeout(() => {
      setStatus(null)
    }, 5000)

    return () => clearTimeout(timer)
  }, [status])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isSubmitting) return

    const form = event.currentTarget
    const formData = new FormData(form)

    setIsSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      })

      const result = await response.json()

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Unable to send message.")
      }

      sendGAEvent("event", "contact_form_submit", {
        form_name: "portfolio_contact",
      })

      form.reset()

      setStatus({
        type: "success",
        message: "Message sent successfully.",
      })
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your message.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section id="contact" className="border-y border-accent/30">
      <Container>
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
            {/* Contact introduction */}
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.14em] text-primary">
                Contact
              </p>

              <h2 className="text-3xl font-semibold tracking-tight min-[560px]:text-[40px] lg:text-[44px] lg:leading-[1.08]">
                <span>Have a project?</span>{" "}
                <span className="text-primary">Let&apos;s make it real.</span>
              </h2>

              <p className="mt-4 w-full max-w-lg text-justify text-sm leading-6 text-muted-foreground min-[560px]:max-w-none lg:max-w-lg lg:text-[15px]">
                Have an idea, project, or problem to solve? Share the details
                and let&apos;s discuss how I can help.
              </p>

              <div className="mt-7 flex flex-col gap-1">
                {contactLinks.map(
                  ({ label, value, href, icon: Icon, iconClassName }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => { if (href.startsWith("mailto:")) { sendGAEvent("event", "contact_email_click", { link_location: "contact_section", }) } }}
                      className="group flex w-fit items-center gap-3 rounded-lg px-2 py-1.5 text-[15px] font-medium text-muted-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary"
                    >
                      <span className="inline-flex size-9 items-center justify-center rounded-lg border border-border/70 bg-card/50 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:bg-primary/5">
                        <Icon
                          className={cn("size-4", iconClassName)}
                          aria-hidden="true"
                        />
                      </span>

                      <span>{value}</span>

                      <ArrowUpRight
                        className="size-4 opacity-60 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </Link>
                  ),
                )}
              </div>
            </div>

            {/* Contact form */}
            <SlideUp>
              <div className="mx-auto w-full px-3 sm:px-0">
                <form
                  className="mx-auto w-full max-w-md rounded-xl border border-border/70 bg-card/40 p-5 sm:p-6 lg:mx-0 lg:max-w-none"
                  onSubmit={handleSubmit}
                >
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  <div className="grid gap-5">
                    <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                      <div className="grid gap-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-foreground"
                        >
                          Name
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          required
                          className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                        />
                      </div>

                      <div className="grid gap-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-foreground"
                        >
                          Email
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          required
                          className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                        />
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground"
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell me about the project..."
                        required
                        className="w-full resize-none rounded-lg border border-border bg-background px-3 py-3 text-sm leading-6 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/10"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-[10px] bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/80 hover:shadow-[0_8px_24px_-8px_var(--primary)] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="size-4" aria-hidden="true" />
                    </button>

                    {status && (
                      <p
                        role="status"
                        aria-live="polite"
                        className={cn(
                          "text-sm",
                          status.type === "success"
                            ? "text-green-600 dark:text-green-400"
                            : "text-destructive",
                        )}
                      >
                        {status.message}
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </SlideUp>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
