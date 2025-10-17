import Link from "next/link"
import { useRouter } from "next/router"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

export const Header = () => {
  const router = useRouter()

  const isHomePage = router.pathname === "/"
  const isBlogPage = router.pathname.startsWith("/blog")

  return (
    <header className="fixed top-0 z-50 w-full border-white/10 border-b bg-background/95 backdrop-blur supports-[backdrop-filters]:bg-background/60">
      {/* CONTAINER */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CONTENT */}
        <div className="flex h-16 items-center justify-between">
          <Link href="/">Logo</Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className={cn(
                "font-medium text-sm transition-colors hover:text-blue-500",
                isHomePage ? "text-blue-500" : "text-muted-foreground"
              )}
            >
              Início
            </Link>

            <Link
              href="/blog"
              className={cn(
                "font-medium text-sm transition-colors hover:text-blue-500",
                isBlogPage ? "text-blue-500" : "text-muted-foreground"
              )}
            >
              Blog
            </Link>

            <Button variant="secondary">Começar</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
