import type { GetStaticProps } from "next"

type ISRPageProps = {
  currentTime: string
}

export default function ISRPage({ currentTime }: ISRPageProps) {
  return (
    <div className="container pt-5 pb-20 md:pt-20 md:pb-32">
      <h1 className="text-blue-200 text-heading-hg">
        Incremental Static Regeneration
      </h1>

      <p className="text-gray-200">
        Current Time (regenerated every 10 seconds): {currentTime}
      </p>
    </div>
  )
}

// biome-ignore lint/suspicious/useAwait: GetStaticProps must be async
export const getStaticProps: GetStaticProps<ISRPageProps> = async () => {
  const currentTime = new Date().toISOString()

  return {
    props: {
      currentTime,
    },
    revalidate: 10, // Revalidate every 10 seconds
  }
}
