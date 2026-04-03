import Link from "next/link"
import { BrandShell } from "@/components/brand-shell"

export default function SuccessPage() {
  return (
    <BrandShell title="Gönderim Başarılı" subtitle="Rapor başarıyla iletildi">
      <section className="rounded-[28px] border border-[#c8a46b]/20 bg-[radial-gradient(circle_at_top,_rgba(200,164,107,0.16),_transparent_55%),rgba(255,255,255,0.03)] p-6 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#c8a46b]/30 bg-[#0f1217] text-2xl text-[#c8a46b]">
          ✓
        </div>

        <h2 className="text-2xl font-semibold tracking-tight">İşlem tamamlandı</h2>
        <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-white/65">
          Gönderdiğin rapor başarıyla işlendi ve Telegram grubuna iletildi.
        </p>

        <div className="mt-6 grid gap-3">
          <Link
            href="/"
            className="rounded-2xl bg-[#c8a46b] px-4 py-3 text-sm font-semibold text-black"
          >
            Ana Sayfaya Dön
          </Link>

          <Link
            href="/checklist"
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/70"
          >
            Yeni Checklist Başlat
          </Link>
        </div>
      </section>
    </BrandShell>
  )
}