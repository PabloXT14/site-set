import Image from "next/image"
import Link from "next/link"

export default function UsersPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <h2 className="text-zinc-50">Users</h2>

      <Link
        href="/"
        className="mt-4 cursor-pointer text-zinc-50 hover:underline"
      >
        Back to Home
      </Link>

      <Image
        src="/assets/primeiro-post.png"
        alt="Primeiro Post"
        width={500}
        height={500}
      />
    </div>
  )
}
