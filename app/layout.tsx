import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Porthole Operations",
  description: "Porthole iç operasyon paneli",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
