"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, FolderCode } from "lucide-react"
import { motion } from "motion/react"

import { Card } from "@/components/ui/card"
import type { Project } from "@/types"

type ProjectCardProps = {
  project: Project
  priority?: boolean
  compact?: boolean
}

export function ProjectCard({
  project,
  priority = false,
  compact = false,
}: ProjectCardProps) {
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
        className="project-card-shadow h-full"
      >
        <Card className="group h-full overflow-hidden border-border/80 bg-card transition-colors duration-300 hover:border-primary/50 hover:bg-primary/5">
          {/* Project visual */}
          <div
            className={`relative overflow-hidden border-b border-border/70 bg-muted ${
              compact ? "h-48 sm:h-52 lg:h-56" : "h-52 sm:h-56 lg:h-60"
            }`}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading={priority ? "eager" : "lazy"}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-linear-to-br from-primary/10 via-card to-accent/10">
                <FolderCode
                  className="size-12 text-primary/70"
                  aria-hidden="true"
                />
              </div>
            )}

            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          {/* Content */}
          <div
            className={`flex h-full flex-col ${compact ? "p-5 sm:p-6" : "p-6"}`}
          >
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-primary">
              {project.category}
            </p>

            <div className="mt-3">
              <h3 className="text-lg font-semibold tracking-tight transition-colors duration-200 group-hover:text-primary">
                {project.title}
              </h3>
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

            <div className="mt-auto pt-6">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-200 group-hover:text-primary">
                View Project
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  )
}
