import type { ReactNode } from "react"

type BrandShellProps = {
  children: ReactNode
  title?: string
  subtitle?: string
}

export function BrandShell({ children, title, subtitle }: BrandShellProps) {
  return (
    <main className="min-h-screen bg-[#07090c] text-[#f5efe6]">
      <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col justify-center px-4 py-6">
        <div className="mb-5 rounded-[30px] border border-white/10 bg-[#0b0e12] p-5 shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-[22px] border border-[#c8a46b]/25 bg-black/20">
              <img src="/logo.png" alt="Porthole" className="h-11 w-11 object-contain" />
            </div>

            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-[0.30em] text-[#c8a46b]">
                Porthole
              </p>
              <h1 className="truncate text-[22px] font-semibold tracking-tight text-white">
                {title || "Operasyon Paneli"}
              </h1>
              {subtitle ? (
                <p className="mt-1 text-sm leading-5 text-white/52">{subtitle}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="space-y-4">{children}</div>
      </div>
    </main>
  )
}
