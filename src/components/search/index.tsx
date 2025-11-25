import { useCallback } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { CircleX, SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export const Search = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams?.get("q") ?? ""

  const handleSearch = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault()

      if (query.trim()) {
        router.push(`/blog?q=${encodeURIComponent(query)}`)
      }
    },
    [query, router]
  )

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value

    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, {
      // shallow: true, // mantém a rota da página atual sem recarregar
      scroll: false, // não rola para o topo
    })
  }

  const resetSearch = () => {
    router.push("/blog", {
      scroll: false, // não rola para o topo
    })
  }

  return (
    <form onSubmit={handleSearch} className="group relative w-full md:w-60">
      <div
        className={cn(
          "flex h-10 w-full items-center gap-3 rounded-lg border border-gray-400 px-4 transition-all duration-200 group-focus-within:border-blue-300",
          query && "border-blue-300"
        )}
      >
        <SearchIcon
          className={cn(
            "size-4 flex-shrink-0 text-gray-300 transition-colors duration-200 group-focus-within:text-blue-300",
            query && "text-blue-300"
          )}
        />

        <input
          type="text"
          placeholder="Buscar"
          onChange={handleQueryChange}
          value={query}
          className="w-full bg-transparent text-body-sm text-gray-100 outline-none placeholder:text-body-sm placeholder:text-gray-300"
        />

        {query && (
          <CircleX
            className="size-4 flex-shrink-0 cursor-pointer text-gray-300"
            onClick={resetSearch}
          />
        )}
      </div>
    </form>
  )
}
