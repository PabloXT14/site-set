import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"

import { PostPage } from "@/templates/blog"

type Params = {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params
  const post = allPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return <PostPage post={post} />
}
