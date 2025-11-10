type AvatarDescriptionProps = {
  children: React.ReactNode
}

export const AvatarDescription = ({ children }: AvatarDescriptionProps) => (
  <span className="text-body-xs text-gray-300">{children}</span>
)
