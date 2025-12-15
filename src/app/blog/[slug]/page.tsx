import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"

import { PostPage } from "@/templates/blog"

type Params = {
  params: Promise<{
    slug: string
  }>
}

// Metadata dinâmico no App Router
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params

  const post = allPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Post not found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author.name }],
    robots: "index, follow",
    openGraph: {
      images: [post.image],
    },
  }
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
