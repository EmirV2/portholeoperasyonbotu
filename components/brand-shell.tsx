import type { ReactNode } from "react"

type BrandShellProps = {
  children: ReactNode
  title?: string
  subtitle?: string
}

export function BrandShell({ children, title, subtitle }: BrandShellProps) {
  return (
    <main className="page-shell">
      <div className="page-container">
        <section className="brand-header">
          <div className="brand-header-row">
            <div className="brand-logo-box">
              <img src="/logo.png" alt="Porthole" className="brand-logo" />
            </div>

            <div>
              <p className="brand-kicker">Porthole</p>
              <h1 className="brand-title">{title || "Operasyon Paneli"}</h1>
              {subtitle ? <p className="brand-subtitle">{subtitle}</p> : null}
            </div>
          </div>
        </section>

        <div className="stack">{children}</div>
      </div>
    </main>
  )
}
