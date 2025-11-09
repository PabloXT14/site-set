import type { ReactNode } from "react"
import { Inter, PT_Sans_Caption } from "next/font/google"

import { Header } from "./header"
import { Footer } from "./footer"

type LayoutProps = {
  children: ReactNode
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans", // mesmo nome da variável criado no tailwind.config
})
const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caption",
})

export const Layout = ({ children }: LayoutProps) => (
  <div
    className={`${inter.className} ${ptSansCaption.className} dark relative flex min-h-screen flex-col bg-gray-700 font-sans text-gray-100`}
  >
    <Header />

    <main className="mt-16 flex flex-1 flex-col">{children}</main>

    <Footer />
  </div>
)
