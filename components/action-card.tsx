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
    <Link
      href={href}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0d1015] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition duration-200 hover:-translate-y-[1px] hover:border-[#c8a46b]/30"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,164,107,0.10),transparent_35%)] opacity-0 transition group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#c8a46b]/20 bg-black/20 text-[#c8a46b]">
          {icon}
        </div>

        <h2 className="text-[20px] font-semibold tracking-tight text-white">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-white/58">{description}</p>

        <div className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#c8a46b]">
          Aç
          <span className="transition group-hover:translate-x-1">→</span>
        </div>
      </div>
    </Link>
  )
}
