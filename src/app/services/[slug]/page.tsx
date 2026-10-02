import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ServicePage } from "@/components/services/service-page"
import { services } from "@/data/services"

type ServiceRouteProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({
  params,
}: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    return {}
  }

  return {
    title: service.title,
    description: service.shortDescription,
  }
}

export default async function ServiceRoute({ params }: ServiceRouteProps) {
  const { slug } = await params

  const service = services.find((item) => item.slug === slug)

  if (!service) {
    notFound()
  }

  return <ServicePage service={service} />
}
