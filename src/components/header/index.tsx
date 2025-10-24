import Link from "next/link"

import { Button } from "../ui/button"
import { ActiveLink } from "../active-link"
import { Logo } from "../logo"

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-gray-500 border-b backdrop-blur">
      {/* CONTAINER */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CONTENT */}
        <div className="flex h-16 items-center justify-between">
          <Logo />

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
