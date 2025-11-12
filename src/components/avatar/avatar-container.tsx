import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type AvatarContainerProps = ComponentProps<"div">

export const AvatarContainer = ({
  className,
  ...rest
}: AvatarContainerProps) => (
  <div className={cn("flex items-center gap-2", className)} {...rest} />
)
