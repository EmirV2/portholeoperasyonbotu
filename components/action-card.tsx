import Link from "next/link"
import type { ReactNode } from "react"

type ActionCardProps = {
  href: string
  title: string
  description: string
  icon: ReactNode
}

export function ActionCard({ href, title, description, icon }: ActionCardProps) {
  return (
    <Link href={href} className="action-card">
      <div className="action-icon">{icon}</div>
      <h2 className="action-title">{title}</h2>
      <p className="action-text">{description}</p>
      <div className="action-link">Aç →</div>
    </Link>
  )
}
