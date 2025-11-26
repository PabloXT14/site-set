import Link from "next/link"
import { FileQuestion, Search } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      {/* ICON */}
      <div className="mb-6 w-full max-w-md text-center">
        <FileQuestion size={64} className="mx-auto text-gray-100" />
      </div>

      {/* MESSAGE */}
      <div className="relative mb-3 inline-block">
        <span className="-rotate-12 -translate-y-2 -translate-x-1 inline-block transform font-bold text-8xl text-white">
          4
        </span>
        <span className="inline-block font-bold text-8xl text-white">0</span>
        <span className="inline-block font-bold text-8xl text-white">4</span>
      </div>

      <p className="mb-8 text-gray-100">Página não encontrada</p>

      {/* LINKS */}
      <div className="flex items-center gap-4">
        <Button variant="primary" asChild>
          <Link href="/">Home</Link>
        </Button>

        <Button variant="secondary" asChild>
          <Link href="/blog?q=">
            <Search size={16} />
            Pesquisar posts
          </Link>
        </Button>
      </div>
    </div>
  )
}
