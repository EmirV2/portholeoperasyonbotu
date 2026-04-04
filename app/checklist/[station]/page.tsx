import Link from "next/link"
import { notFound } from "next/navigation"
import { BrandShell } from "../../../components/brand-shell"
import { getStationByKey } from "../../../lib/stations"
import type { StationKey } from "../../../lib/types"

export default async function StationTypePage({
  params,
}: {
  params: Promise<{ station: StationKey }>
}) {
  const { station } = await params
  const stationData = getStationByKey(station)

  if (!stationData) return notFound()

  return (
    <BrandShell
      title={stationData.shortTitle}
      subtitle="Checklist türünü seç"
    >
      <section className="hero-card">
        <p className="hero-label">İstasyon</p>
        <h2 className="hero-title">{stationData.shortTitle}</h2>
        <p className="hero-text">
          Bu istasyon için hangi operasyon kontrolünü başlatmak istediğini seç.
        </p>
      </section>

      <div className="type-list">
        <Link href={`/checklist/${station}/opening`} className="type-card">
          <h2 className="type-card-title">Açılış Checklist</h2>
          <p className="type-card-text">
            Gün başlangıcında makine ve hazırlık kontrollerini tamamla.
          </p>
          <div className="type-card-link">Açılışı Başlat →</div>
        </Link>

        <Link href={`/checklist/${station}/closing`} className="type-card">
          <h2 className="type-card-title">Kapanış Checklist</h2>
          <p className="type-card-text">
            Gün sonu temizlik, kapatma ve son kontrol maddelerini tamamla.
          </p>
          <div className="type-card-link">Kapanışı Başlat →</div>
        </Link>
      </div>
    </BrandShell>
  )
}
