"use client"

import type { ComponentProps } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

type ActiveLinkProps = ComponentProps<typeof Link>

export const ActiveLink = ({ className, href, ...props }: ActiveLinkProps) => {
  const linkPath = (typeof href === "string" ? href : href.pathname) ?? ""
  const pathname = usePathname()

  const isCurrentPath =
    pathname === linkPath || pathname?.startsWith(`${linkPath}/`)

  return (
    <Link
      className={cn(
        "font-medium text-action-sm transition-colors hover:text-blue-200",
        isCurrentPath ? "text-blue-200" : "text-gray-100",
        className
      )}
      href={href}
      {...props}
    />
  )
}
