import { Avatar } from "@/components/avatar"
import Image from "next/image"
import Link from "next/link"

type Author = {
  name: string
  avatar: string
}

type Post = {
  slug: string
  title: string
  description: string
  image: string
  date: string
  author: Author
}

type PostCardProps = {
  data: Post
}

export const PostCard = ({ data }: PostCardProps) => {
  return (
    <Link
      href={`/blog/${data.slug}`}
      className="relative flex w-full max-w-2xl flex-col gap-2 overflow-hidden rounded-xl border border-gray-400 bg-gray-600 p-2 transition-all duration-300 hover:border-blue-300"
    >
      {/* DATE */}
      <div className="absolute top-0 right-0 rounded-bl-lg bg-gray-600 px-3 py-1.5">
        <span className="text-body-xs text-gray-300">{data.date}</span>
      </div>

      {/* IMAGE */}
      <div className="h-40 w-full overflow-hidden rounded-md">
        <Image
          src={data.image}
          alt={data.title}
          width={288}
          height={144}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-grow flex-col gap-3 p-2">
        {/* INFO */}
        <div className="flex flex-col gap-2">
          <h2 className="line-clamp-3 text-gray-100 text-heading-sm">
            {data.title}
          </h2>

          <p className="line-clamp-3 text-body-sm text-gray-300">
            {data.description}
          </p>
        </div>

        {/* DIVIDER */}
        <div className="mt-auto h-px w-full bg-gray-400" />

        {/* AUTHOR */}
        <Avatar.Container>
          <Avatar.Image src={data.author.avatar} alt="author" size="xs" />

          <Avatar.Title>{data.author.name}</Avatar.Title>
        </Avatar.Container>
      </div>
    </Link>
  )
}
