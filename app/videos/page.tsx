import Link from "next/link"
import { BrandShell } from "../../components/brand-shell"

const videos = [
  {
    title: "Bar Makinesi Kullanım Videosu",
    description: "Bar tipi bulaşık makinesi kullanım akışı.",
    url: "#",
  },
  {
    title: "Mutfak Makinesi Kullanım Videosu",
    description: "Mutfak tipi bulaşık makinesi kullanım akışı.",
    url: "#",
  },
]

export default function VideosPage() {
  return (
    <BrandShell title="Kullanım Videoları" subtitle="Hızlı eğitim ve operasyon desteği">
      <div className="grid gap-4">
        {videos.map((video) => (
          <a
            key={video.title}
            href={video.url}
            className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c8a46b]/20 bg-[#0f1217] text-[#c8a46b]">
              ▶
            </div>
            <h2 className="text-lg font-semibold">{video.title}</h2>
            <p className="mt-2 text-sm leading-6 text-white/60">{video.description}</p>
          </a>
        ))}
      </div>

      <Link
        href="/"
        className="mt-4 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/70"
      >
        Ana Sayfaya Dön
      </Link>
    </BrandShell>
  )
}
