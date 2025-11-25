"use client"

import { useSearchParams } from "next/navigation"
import { Inbox } from "lucide-react"

import { Search } from "@/components/search"
import { PostGridCard } from "./components/post-grid-card"
import { PostCard } from "./components/post-card"

import type { Post } from "contentlayer/generated"

export type BlogListProps = {
  posts: Post[]
}

export const BlogList = ({ posts }: BlogListProps) => {
  const searchParams = useSearchParams()
  const query = searchParams?.get("q") ?? ""

  const pageTitle = query
    ? `Resultados de busca para "${query}"`
    : "Dicas e estratégias para impulsionar seu negócio"

  const postList = query
    ? posts.filter((post) =>
        post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      )
    : posts

  const hasPosts = postList.length > 0

  return (
    <div className="flex h-full flex-grow flex-col gap-6 pt-5 pb-20 md:gap-14 md:pt-20 md:pb-32">
      {/* HEADER */}
      <header className="container">
        <div className="flex flex-col items-start justify-between space-y-6 md:flex-row md:items-end">
          {/* TITLE CONTAINER */}
          <div className="flex flex-col gap-3">
            {/* TAG */}
            <span className="w-fit rounded bg-cyan-300 px-3 py-1.5 text-body-tag text-cyan-100 uppercase">
              Blog
            </span>

            {/* TITLE */}
            <h1 className="max-w-2xl text-balance font-caption text-gray-100 text-heading-lg md:text-heading-xl">
              {pageTitle}
            </h1>
          </div>

          <Search />
        </div>
      </header>

      {/* LIST OF POSTS */}
      {hasPosts && (
        <PostGridCard>
          {postList.map((post) => (
            <PostCard
              key={post._id}
              data={{
                ...post,
                date: new Date(post.date).toLocaleDateString("pt-BR"),
              }}
            />
          ))}
        </PostGridCard>
      )}

      {!hasPosts && (
        <div className="container">
          {/* CONTENT */}
          <div className="flex flex-col items-center justify-center gap-8 rounded-lg border-2 border-gray-300 border-dashed p-8 md:p-12">
            <Inbox className="size-12 text-cyan-100" />

            <span className="text-center text-body-md text-gray-100">
              Nenhum post encontrado
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
