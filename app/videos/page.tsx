import Link from "next/link"
import { BrandShell } from "../../components/brand-shell"

const videos = [
  {
    title: "Bar Makinesi Kullanım Videosu",
    description: "Bar tipi bulaşık makinesi kullanım akışı.",
    url: "https://youtu.be/iq3aIZz8x3M?si=vqLDNhuDc7qcOXEu",
  },
  {
    title: "Mutfak Makinesi Kullanım Videosu",
    description: "Mutfak tipi bulaşık makinesi kullanım akışı.",
    url: "https://youtu.be/iq3aIZz8x3M?si=vqLDNhuDc7qcOXEu",
  },
]

export default function VideosPage() {
  return (
    <BrandShell
      title="Kullanım Videoları"
      subtitle="Eğitim ve operasyon destek videoları"
    >
      <section className="hero-card">
        <p className="hero-label">Video Merkezi</p>
        <h2 className="hero-title">
          Kullanım videolarına
          <br />
          hızlı erişim
        </h2>
        <p className="hero-text">
          İlgili ekipman veya operasyon videosunu seçip direkt açabilirsin.
        </p>
      </section>

      <div className="station-list">
        {videos.map((video) => (
          <a
            key={video.title}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="station-card"
          >
            <h2 className="station-card-title">{video.title}</h2>
            <p className="station-card-text">{video.description}</p>
            <div className="station-card-link">Videoyu Aç →</div>
          </a>
        ))}
      </div>

      <Link href="/" className="secondary-link">
        Ana Sayfaya Dön
      </Link>
    </BrandShell>
  )
}
