import type { MetadataRoute } from "next"

import { projects } from "@/data/projects"
import { services } from "@/data/services"

const BASE_URL = "https://www.abdulrehmanmughal.me"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about",
    "/projects",
    "/contact",
  ]

  return [
    ...staticRoutes.map((route) => ({
      url: `${BASE_URL}${route}`,
    })),

    ...services.map((service) => ({
      url: `${BASE_URL}/services/${service.slug}`,
    })),

    ...projects.map((project) => ({
      url: `${BASE_URL}/projects/${project.slug}`,
    })),
  ]
}