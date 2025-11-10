type AvatarContainerProps = {
  children: React.ReactNode
}

export const AvatarContainer = ({ children }: AvatarContainerProps) => (
  <div className="flex items-center gap-3">{children}</div>
)
