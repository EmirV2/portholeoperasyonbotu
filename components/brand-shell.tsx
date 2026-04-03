import { ReactNode } from "react"

type BrandShellProps = {
  children: ReactNode
  title?: string
  subtitle?: string
}

export function BrandShell({ children, title, subtitle }: BrandShellProps) {
  return (
    <main className="min-h-screen bg-[#07090c] text-[#f5efe6]">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-6">
        <div className="mb-6 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur">
          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#c8a46b]/30 bg-[#0f1217]">
              <img src="/logo.png" alt="Porthole" className="h-10 w-10 object-contain" />
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#c8a46b]">
                Porthole Operations
              </p>
              <h1 className="text-xl font-semibold tracking-tight">{title || "Operasyon Paneli"}</h1>
              {subtitle ? <p className="mt-1 text-sm text-white/60">{subtitle}</p> : null}
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>

        {children}
      </div>
    </main>
  )
}