"use client"

import { useShare } from "@/hooks/use-share"

import { Button } from "@/components/ui/button"

type PostShareProps = {
  post: {
    url: string
    title: string
    description: string
  }
}

export const PostShare = ({ post }: PostShareProps) => {
  const { shareButtons } = useShare({
    url: post.url,
    title: post.title,
    text: post.description,
  })

  return (
    <aside className="space-y-5">
      <h2 className="text-gray-100 text-heading-xs">Compartilhar</h2>

      <div className="flex flex-wrap gap-2 lg:flex-col">
        {shareButtons.map(({ provider, name, icon, action }) => (
          <Button
            key={provider}
            variant="outline"
            className="w-fit justify-start px-3 lg:w-full lg:px-4"
            onClick={action}
          >
            {icon}
            <span className="hidden lg:inline">{name}</span>
          </Button>
        ))}
      </div>
    </aside>
  )
}
