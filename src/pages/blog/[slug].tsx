import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { allPosts } from "contentlayer/generated"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Avatar } from "@/components/avatar"
import { Markdown } from "@/components/markdown"

type PostPageParams = {
  slug: string
}

export default function PostPage() {
  const router = useRouter()

  const { slug } = router.query as PostPageParams

  // biome-ignore lint/style/noNonNullAssertion: needed
  const post = allPosts.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  )!

  const publishedDate = new Date(post?.date ?? "").toLocaleDateString("pt-BR")

  return (
    <div className="container pt-5 pb-20 md:pt-20 md:pb-32">
      {/* BREADCRUMBS */}
      <Breadcrumb className="mb-5 lg:mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild className="text-action-sm">
              <Link href="/blog">Blog</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <span className="text-action-sm text-blue-200">{post?.title}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* CONTENT */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_224px]">
        {/* POST */}
        <article className="overflow-hidden rounded-xl border border-gray-400 bg-gray-600">
          <figure className="relative aspect-[16/10] max-h-[264px] w-full overflow-hidden">
            <Image
              src={post?.image}
              alt={post?.title}
              fill
              className="h-full w-full object-cover object-center"
            />
          </figure>

          {/* INFO */}
          <div className="flex flex-col gap-8 p-6 pt-8 lg:gap-12 lg:p-16 lg:pt-12">
            <header className="flex flex-col gap-6 lg:gap-8">
              <h1 className="text-balance text-gray-100 text-heading-md lg:text-heading-xl">
                {post?.title}
              </h1>

              <Avatar.Container>
                <Avatar.Image src={post.author.avatar} alt={post.author.name} />
                <Avatar.Content>
                  <Avatar.Title>{post.author.name}</Avatar.Title>
                  <Avatar.Description>
                    Publicado em{" "}
                    <time dateTime={post.date}>{publishedDate}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="prose prose-invert max-w-none">
              <Markdown content={post.body.raw} />
            </div>
          </div>
        </article>

        {/* SHARE */}
        <div>
          <h3>Compartilhar</h3>
        </div>
      </div>
    </div>
  )
}
