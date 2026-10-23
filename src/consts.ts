import type { SvgComponent } from "astro/types"

import Email from "@/assets/icons/email.svg"
import GitHub from "@/assets/icons/github.svg"
import RSS from "@/assets/icons/rss.svg"
import Twitter from "@/assets/icons/twitter.svg"

export const SITE = {
  title: "Shefin Franklin",
  description: "Shefin Franklin is a developer building modern web applications, developer tools, and digital experiences with a focus on simplicity, performance, and thoughtful design.",
  locale: "en-IN",
  dir: "ltr",
  defaultPageImage: "/static/opengraph-image.png",
  defaultPostImage: "/static/1200x630.png",
} as const

export const NAVIGATION = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/authors", label: "About" },
]

export const SOCIALS: {
  href: string
  label: string
  icon: SvgComponent
}[] = [
  {
    href: "https://github.com/shefin-franklin",
    label: "GitHub",
    icon: GitHub,
  },
  {
    href: "https://twitter.com/shefin_franklin",
    label: "Twitter",
    icon: Twitter,
  },
  {
    href: "mailto:contact@shefin.dev",
    label: "Email",
    icon: Email,
  },
  {
    href: "/rss.xml",
    label: "RSS",
    icon: RSS,
  },
]

