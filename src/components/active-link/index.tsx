import type { ComponentProps } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import { cn } from "@/lib/utils"

type ActiveLinkProps = ComponentProps<typeof Link>

export const ActiveLink = ({ className, ...props }: ActiveLinkProps) => {
  const router = useRouter()

  const isCurrentPath =
    router.asPath === props.href ||
    router.asPath === props.as ||
    router.asPath.startsWith(String(props.as))

  return (
    <Link
      className={cn(
        "font-medium text-sm transition-colors hover:text-blue-500",
        isCurrentPath ? "text-blue-500" : "text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
