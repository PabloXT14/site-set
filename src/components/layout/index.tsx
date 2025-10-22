import type { ReactNode } from "react"

import { Header } from "../header"

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <div className="dark relative flex min-h-screen flex-col">
    <Header />
    <main className="mb-12 flex flex-1 flex-col">{children}</main>
  </div>
)
