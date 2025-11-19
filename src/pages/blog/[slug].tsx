import type { GetStaticPaths, GetStaticProps } from "next"

import { PostPage as Post, type PostPageProps } from "@/templates/blog"

import { allPosts } from "contentlayer/generated"

export default function PostPage({ post }: PostPageProps) {
  return <Post post={post} />
}

// GetStaticPaths serve para definir quais páginas dinâmicas devem ser pré-renderizadas em tempo de build (ou seja, definir o caminho (path) das páginas dinâmicas que serão pre-renderizadas SSG).
export const getStaticPaths: GetStaticPaths = () => {
  const RECENT_POSTS_COUNT = 5

  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const recentPosts = sortedPosts.slice(0, RECENT_POSTS_COUNT)

  const paths = recentPosts.map((post) => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: "blocking", // blocking: Se uma página solicitada não foi pré-renderizada durante o build, o Next.js irá renderizá-la no servidor na primeira requisição. Durante esse processo, o usuário verá uma página em branco até que a página seja gerada e entregue. Após a geração inicial, a página será armazenada em cache e servida como uma página estática para requisições subsequentes.
  }
}

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context
) => {
  const { slug } = context.params as { slug: string }

  const post = await allPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}
