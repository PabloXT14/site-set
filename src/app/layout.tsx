import type { Metadata } from "next"

import "@/styles/globals.css"

import { Layout } from "@/components/layout"

// Metadata default para o site, que pode ser sobrescrito em páginas específicas
export const metadata: Metadata = {
  title: "Site.Set",
  description: "Venda seus produtos como afiliado em um único lugar.",
  robots: "index, follow", // index = permitted to be indexed, follow = permitted to be followed
  openGraph: {
    title: "Site.Set",
    description: "Venda seus produtos como afiliado em um único lugar.",
    url: "https://site-set-chi.vercel.app/og-image.jpg",
    siteName: "Site.Set",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://site-set-chi.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Site.Set",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
