import Image from "next/image"
import Link from "next/link"

export const Logo = () => (
  <Link href="/" title="Página inicial">
    <Image
      src="/logo.svg"
      alt="Logo do site"
      width={116}
      height={32}
      className="w-auto"
    />
  </Link>
)
