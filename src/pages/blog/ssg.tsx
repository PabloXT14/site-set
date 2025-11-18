import type { GetStaticProps } from "next"

type SSGPageProps = {
  buildTime: string
}

export default function SSGPage({ buildTime }: SSGPageProps) {
  return (
    <div className="container pt-5 pb-20 md:pt-20 md:pb-32">
      <h1 className="text-blue-200 text-heading-hg">Static Site Generation</h1>

      <p className="text-gray-200">Build Time: {buildTime}</p>
    </div>
  )
}

// biome-ignore lint/suspicious/useAwait: GetStaticProps must be async
export const getStaticProps: GetStaticProps<SSGPageProps> = async () => {
  const buildTime = new Date().toISOString()

  return {
    props: {
      buildTime,
    },
  }
}
