import Image, { type ImageProps } from "next/image"

import { cn } from "@/lib/utils"

type AvatarSize = "xs" | "sm"

type AvatarImageProps = Omit<ImageProps, "height" | "width"> & {
  size?: AvatarSize
}

const AVATAR_SIZE: Record<AvatarSize, string> = {
  xs: "size-5",
  sm: "size-9",
}

export const AvatarImage = ({
  src,
  alt,
  size = "xs",
  ...rest
}: AvatarImageProps) => (
  <div
    className={cn(
      "relative overflow-hidden rounded-full border border-blue-200",
      AVATAR_SIZE[size]
    )}
  >
    <Image src={src} alt={alt} fill {...rest} />
  </div>
)
