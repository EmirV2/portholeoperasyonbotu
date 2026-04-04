import { BrandShell } from "../components/brand-shell"
import { ActionCard } from "../components/action-card"

function IconPlay() {
  return <span>▶</span>
}

function IconChecklist() {
  return <span>✓</span>
}

function IconAlert() {
  return <span>!</span>
}

export default function HomePage() {
  return (
    <BrandShell title="Operasyon Paneli" subtitle="Porthole iç operasyon akışı">
      <section className="hero-card">
        <p className="hero-label">Porthole Foça</p>
        <h2 className="hero-title">
          Günlük operasyonu
          <br />
          tek ekrandan yönet
        </h2>
        <p className="hero-text">
          Kullanım videolarına ulaş, açılış-kapanış checklist doldur, sorun bildir.
          Tüm raporlar Telegram grubuna anında düşsün.
        </p>

        <div className="badge-row">
          <div className="badge badge-live">Canlı Sistem</div>
          <div className="badge badge-muted">QR Ready</div>
        </div>
      </section>

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

      <div className="center-note">Porthole Operations</div>
    </BrandShell>
  )
}
