import type { ReactNode } from "react"
import { Inter, PT_Sans_Caption } from "next/font/google"

import { Header } from "../header"
import { Footer } from "../footer"

type LayoutProps = {
  children: ReactNode
}

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] })
const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const Layout = ({ children }: LayoutProps) => (
  <div
    className={`${inter.className} ${ptSansCaption.className} dark relative flex min-h-screen flex-col bg-gray-700`}
  >
    <Header />

    <main className="flex flex-1 flex-col">{children}</main>

    <Footer />
  </div>
)
