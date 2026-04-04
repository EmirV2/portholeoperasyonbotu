import Link from "next/link"
import { BrandShell } from "../../components/brand-shell"
import { stations } from "../../lib/stations"

export default function ChecklistStationsPage() {
  return (
    <BrandShell
      title="Checklist Seç"
      subtitle="Kontrol yapılacak operasyon alanını seç"
    >
      <section className="hero-card">
        <p className="hero-label">Checklist Akışı</p>
        <h2 className="hero-title">
          Hangi istasyonda
          <br />
          işlem yapılacak?
        </h2>
        <p className="hero-text">
          Önce ilgili makine veya operasyon alanını seç. Sonraki ekranda açılış ya da
          kapanış checklist türünü belirleyip işleme devam et.
        </p>
      </section>

      <div className="station-list">
        {stations.map((station) => (
          <Link
            key={station.key}
            href={`/checklist/${station.key}`}
            className="station-card"
          >
            <h2 className="station-card-title">{station.title}</h2>
            <p className="station-card-text">{station.description}</p>
            <div className="station-card-link">Devam Et →</div>
          </Link>
        ))}
      </div>
    </BrandShell>
  )
}
