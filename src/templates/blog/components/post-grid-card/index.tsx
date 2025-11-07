import type { ComponentProps } from "react"

type PostGridCardProps = ComponentProps<"div">

export const PostGridCard = ({ ...props }: PostGridCardProps) => (
  <div
    className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
    {...props}
  />
)
