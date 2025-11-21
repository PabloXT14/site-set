import "@/styles/globals.css"

import { Layout } from "@/components/layout"

export const metadata = {
  title: "Site Set",
  description: "A blog about affiliate marketing and online business.",
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
