import Image, { type ImageProps } from "next/image"

type AvatarImageProps = ImageProps

export const AvatarImage = ({
  src,
  alt,
  width = 40,
  height = 40,
  ...rest
}: AvatarImageProps) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className="rounded-full border border-blue-200"
    {...rest}
  />
)
