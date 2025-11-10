type AvatarContentProps = {
  children: React.ReactNode
}

export const AvatarContent = ({ children }: AvatarContentProps) => (
  <div className="flex flex-col gap-0.5">{children}</div>
)
