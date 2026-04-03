import Link from "next/link"
import { BrandShell } from "@/components/brand-shell"
import { ActionCard } from "@/components/action-card"

function IconPlay() {
  return <span className="text-lg">▶</span>
}

function IconChecklist() {
  return <span className="text-lg">✓</span>
}

function IconAlert() {
  return <span className="text-lg">!</span>
}

export default function HomePage() {
  return (
    <BrandShell
      title="Mobil Operasyon Paneli"
      subtitle="QR ile hızlı erişim • günlük kontrol • anlık Telegram raporu"
    >
      <section className="mb-4 rounded-[28px] border border-[#c8a46b]/20 bg-[radial-gradient(circle_at_top,_rgba(200,164,107,0.16),_transparent_55%),rgba(255,255,255,0.03)] p-5">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[#c8a46b]">
          Premium Workflow
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          Porthole iç operasyon akışı
        </h2>
        <p className="mt-3 text-sm leading-6 text-white/65">
          Kullanım videolarına ulaş, açılış veya kapanış kontrolünü tamamla,
          gerekirse arıza bildir. Her gönderim Telegram grubuna düzenli rapor olarak düşsün.
        </p>
      </section>

      <div className="grid gap-4">
        <ActionCard
          href="/videos"
          title="Kullanım Videoları"
          description="Personelin hızlıca cihaz kullanım videolarına ulaşabildiği alan."
          icon={<IconPlay />}
        />

        <ActionCard
          href="/checklist"
          title="Operasyon Checklist"
          description="İstasyona göre açılış veya kapanış kontrol listesi doldur."
          icon={<IconChecklist />}
        />

        <ActionCard
          href="/issue-report"
          title="Arıza Bildir"
          description="Sorun, eksik veya teknik arıza durumunda anında bildirim gönder."
          icon={<IconAlert />}
        />
      </div>

      <section className="mt-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
        <p className="text-xs uppercase tracking-[0.24em] text-[#c8a46b]">Sistem</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-white/65">Telegram Bildirim Hattı</span>
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
            Aktif
          </span>
        </div>
      </section>

      <div className="mt-6 pb-4 text-center text-xs tracking-[0.22em] text-white/30">
        PORTHOLE FOÇA
      </div>
    </BrandShell>
  )
}