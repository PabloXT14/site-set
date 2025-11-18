import type { GetServerSideProps } from "next"

type SSRPageProps = {
  currentTime: string
}

export default function SSRPage({ currentTime }: SSRPageProps) {
  return (
    <div className="container pt-5 pb-20 md:pt-20 md:pb-32">
      <h1 className="text-blue-200 text-heading-hg">Server-Side Rendering</h1>

      <p className="text-gray-200">Current Time: {currentTime}</p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<
  SSRPageProps
  // biome-ignore lint/suspicious/useAwait: GetServerSideProps must be async
> = async () => {
  const currentTime = new Date().toISOString()

  return {
    props: {
      currentTime,
    },
  }
}
