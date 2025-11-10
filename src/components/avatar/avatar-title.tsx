type AvatarTitleProps = {
  children: React.ReactNode
}

export const AvatarTitle = ({ children }: AvatarTitleProps) => (
  <strong className="text-body-sm text-gray-200">{children}</strong>
)
