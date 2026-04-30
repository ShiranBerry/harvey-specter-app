import { client } from './client'

export type SanityProject = {
  name: string
  tags: string[]
  imageUrl: string
}

export type SanityService = {
  number: string
  name: string
  description: string
  imageUrl: string
}

export type SanityTestimonial = {
  author: string
  quote: string
  logoUrl: string
  logoWidth: number
  logoHeight: number
  desktopLeft: string
  desktopTop: number
  desktopRotate: number
  desktopBehind: boolean
  mobileOrder: number
  mobileRotate: number
}

export type SanityNewsPost = {
  imageUrl: string
  caption: string
  href: string
}

export async function getProjects(): Promise<SanityProject[]> {
  return client.fetch(
    `*[_type == "project"] | order(order asc) { name, tags, "imageUrl": image.asset->url }`
  )
}

export async function getServices(): Promise<SanityService[]> {
  return client.fetch(
    `*[_type == "service"] | order(order asc) { number, name, description, "imageUrl": image.asset->url }`
  )
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  return client.fetch(
    `*[_type == "testimonial"] { author, quote, "logoUrl": logo.asset->url, logoWidth, logoHeight, desktopLeft, desktopTop, desktopRotate, desktopBehind, mobileOrder, mobileRotate }`
  )
}

export async function getNewsPosts(): Promise<SanityNewsPost[]> {
  return client.fetch(
    `*[_type == "newsPost"] | order(order asc) { "imageUrl": image.asset->url, caption, "href": coalesce(href, "#") }`
  )
}
