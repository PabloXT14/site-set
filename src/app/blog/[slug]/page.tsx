import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"

import { PostPage } from "@/templates/blog"

type Params = {
  params: Promise<{
    slug: string
  }>
}

// SSG no App Router
// generateStaticParams serve para gerar parâmetros dinâmicos para as páginas dinâmicas, como o slug
export async function generateStaticParams() {
  return await allPosts.map((post) => ({
    slug: post.slug,
  }))
}

// ISR no App Router
export const revalidate = 60 // revalidate every 60 seconds

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params
  const post = allPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return <PostPage post={post} />
}
