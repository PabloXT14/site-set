import { useRouter } from "next/router"

export default function Post() {
  const router = useRouter()

  const segments = router.query.slug as string[]

  return (
    <div className="min-h-screen bg-zinc-950">
      <h2 className="text-zinc-50">Post: {segments?.join("/")}</h2>
    </div>
  )
}
