import Link from "next/link"
import { ReactNode } from "react"

type ActionCardProps = {
  href: string
  title: string
  description: string
  icon: ReactNode
}

export function ActionCard({ href, title, description, icon }: ActionCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-[26px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition duration-200 hover:border-[#c8a46b]/35 hover:bg-white/[0.06]"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c8a46b]/25 bg-[#0e1116] text-[#c8a46b]">
        {icon}
      </div>

      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-white/60">{description}</p>

      <div className="mt-4 text-xs uppercase tracking-[0.22em] text-[#c8a46b]">
        Aç
      </div>
    </Link>
  )
}