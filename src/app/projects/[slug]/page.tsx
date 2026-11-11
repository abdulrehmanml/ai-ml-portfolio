import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ProjectDetail } from "./_views/project-detail"
import { projects } from "@/data/projects"

type ProjectRouteProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: ProjectRouteProps): Promise<Metadata> {
  const { slug } = await params

  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return {}
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectRoute({ params }: ProjectRouteProps) {
  const { slug } = await params

  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}
