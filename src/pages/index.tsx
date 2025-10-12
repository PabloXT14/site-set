import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <h2 className="text-zinc-50">Home</h2>

      <Link
        href="/users"
        className="mt-4 cursor-pointer text-zinc-50 hover:underline"
      >
        Users page
      </Link>
    </div>
  )
}
