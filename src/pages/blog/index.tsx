import { Search } from "@/components/search"

export default function BlogPage() {
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
              Dicas e estratégias para impulsionar seu negócio
            </h1>
          </div>

          <Search />
        </div>
      </header>

      {/* LIST OF POSTS */}
      <div />
    </div>
  )
}
