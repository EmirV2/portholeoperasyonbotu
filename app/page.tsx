import { BrandShell } from "../components/brand-shell"
import { ActionCard } from "../components/action-card"

function IconPlay() {
  return <span className="text-xl">▶</span>
}

function IconChecklist() {
  return <span className="text-xl">✓</span>
}

function IconAlert() {
  return <span className="text-xl">!</span>
}

export default function HomePage() {
  return (
    <BrandShell
      title="Operasyon Paneli"
      subtitle="Porthole iç operasyon akışı"
    >
      <section className="relative overflow-hidden rounded-[32px] border border-[#c8a46b]/20 bg-[#0d1015] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,164,107,0.22),transparent_35%)]" />
        <div className="relative">
          <p className="text-[11px] uppercase tracking-[0.30em] text-[#c8a46b]">
            Porthole Foça
          </p>
          <h2 className="mt-3 text-[30px] font-semibold leading-[1.05] tracking-tight text-white">
            Günlük operasyonu
            <br />
            tek ekrandan yönet
          </h2>
          <p className="mt-4 max-w-[28ch] text-sm leading-6 text-white/60">
            Kullanım videolarına ulaş, açılış-kapanış checklist doldur, sorun bildir.
            Tüm raporlar Telegram grubuna anında düşsün.
          </p>

          <div className="mt-5 flex items-center gap-2">
            <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] tracking-[0.18em] text-emerald-300">
              CANLI SİSTEM
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] tracking-[0.18em] text-white/45">
              QR READY
            </div>
          </div>
        </div>
      </section>

      <div className="mt-5 grid gap-4">
        <ActionCard
          href="/videos"
          title="Kullanım Videoları"
          description="Makine ve operasyon eğitim videolarını hızlı aç."
          icon={<IconPlay />}
        />

        <ActionCard
          href="/checklist"
          title="Checklist Başlat"
          description="İstasyona göre açılış veya kapanış kontrolünü doldur."
          icon={<IconChecklist />}
        />

        <ActionCard
          href="/issue-report"
          title="Arıza / Eksik Bildir"
          description="Sorun, eksik veya teknik arızayı anında raporla."
          icon={<IconAlert />}
        />
      </div>

      <section className="mt-5 rounded-[28px] border border-white/10 bg-[#0d1015] p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.26em] text-[#c8a46b]">
              Hızlı Akış
            </p>
            <h3 className="mt-2 text-base font-medium text-white">
              Personel için sade kullanım
            </h3>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/55">
            3 Adım
          </div>
        </div>

        <div className="mt-4 grid gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/65">
            1. QR okut
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/65">
            2. İşlemi seç
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/65">
            3. Gönder ve çık
          </div>
        </div>
      </section>

      <div className="mt-6 pb-4 text-center text-[11px] tracking-[0.24em] text-white/25">
        PORTHOLE OPERATIONS
      </div>
    </BrandShell>
  )
}
