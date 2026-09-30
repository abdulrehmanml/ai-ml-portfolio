"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, FolderCode } from "lucide-react"
import { motion } from "motion/react"

import { Card } from "@/components/ui/card"
import type { Project } from "@/types"

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={project.href}
      aria-label={`View case study: ${project.title}`}
      className="block h-full"
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        whileTap={{ scale: 0.995 }}
        transition={{
          duration: 0.18,
          ease: "easeOut",
        }}
        className="h-full"
      >
        <Card className="group h-full overflow-hidden border-border/80 bg-card transition-colors duration-300 hover:border-primary/50 hover:bg-primary/[0.03]">
          {/* Project visual */}
          <div className="relative h-52 overflow-hidden border-b border-border/70 bg-muted sm:h-56 lg:h-60">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 via-card to-accent/10">
                <FolderCode
                  className="size-12 text-primary/70"
                  aria-hidden="true"
                />
              </div>
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          {/* Content */}
          <div className="flex flex-col p-6">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-primary">
              {project.category}
            </p>

            <div className="mt-3 flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold tracking-tight">
                {project.title}
              </h3>

              <ArrowUpRight
                className="mt-0.5 size-5 shrink-0 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                aria-hidden="true"
              />
            </div>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {project.description}
            </p>

            {/* Technology tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground transition-colors duration-200 group-hover:border-primary/20 group-hover:text-foreground"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* Card action */}
            <div className="mt-8 text-sm font-medium text-foreground transition-colors duration-200 group-hover:text-primary">
              View Case Study
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  )
}