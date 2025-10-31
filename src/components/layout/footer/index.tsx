import Link from "next/link"

import { Logo } from "../../logo"

export const Footer = () => (
  <footer className="bg-gray-500">
    {/* CONTAINER */}
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* CONTENT */}
      <div className="flex justify-between gap-8 py-8 md:flex-row">
        <Logo />

        <nav className="flex flex-col items-start gap-4 text-blue-100 text-muted-foreground text-sm md:flex-row md:items-center">
          <Link href="/terms" className="hover:text-blue-200">
            Termos de Uso
          </Link>
          <Link href="/privacy" className="hover:text-blue-200">
            Políticas de Privacidade
          </Link>
          <Link href="/feedback" className="hover:text-blue-200">
            Enviar Feedback
          </Link>
        </nav>
      </div>
    </div>
  </footer>
)
