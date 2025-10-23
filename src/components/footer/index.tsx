import Image from "next/image"
import Link from "next/link"

export const Footer = () => (
  <footer className="border-white/10 border-t bg-background/95">
    {/* CONTAINER */}
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* CONTENT */}
      <div className="flex justify-between gap-8 py-8 md:flex-row">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo do site"
            width={116}
            height={32}
            className="w-auto"
          />
        </Link>

        <nav className="flex flex-col items-start gap-4 text-muted-foreground text-sm md:flex-row md:items-center">
          <Link href="/terms" className="hover:text-primary">
            Termos de Uso
          </Link>
          <Link href="/privacy" className="hover:text-primary">
            Políticas de Privacidade
          </Link>
          <Link href="/feedback" className="hover:text-primary">
            Enviar Feedback
          </Link>
        </nav>
      </div>
    </div>
  </footer>
)
