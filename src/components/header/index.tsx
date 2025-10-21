import Link from "next/link"

import { Button } from "../ui/button"
import { ActiveLink } from "../active-link"

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-white/10 border-b bg-background/95 backdrop-blur supports-[backdrop-filters]:bg-background/60">
      {/* CONTAINER */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CONTENT */}
        <div className="flex h-16 items-center justify-between">
          <Link href="/">Logo</Link>

          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Início</ActiveLink>

            <ActiveLink href="/blog">Blog</ActiveLink>

            <Button variant="secondary" asChild>
              <Link href="/start">Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
