import Link from "next/link"
import { BrandShell } from "@/components/brand-shell"
import { stations } from "@/lib/stations"

export default function ChecklistStationsPage() {
  return (
    <BrandShell title="Checklist İstasyonu Seç" subtitle="İlgili operasyon alanını seç">
      <div className="grid gap-4">
        {stations.map((station) => (
          <Link
            key={station.key}
            href={`/checklist/${station.key}`}
            className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
          >
            <h2 className="text-lg font-semibold">{station.title}</h2>
            <p className="mt-2 text-sm leading-6 text-white/60">{station.description}</p>
          </Link>
        ))}
      </div>
    </BrandShell>
  )
}