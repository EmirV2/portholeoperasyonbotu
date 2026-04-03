import Link from "next/link"
import { notFound } from "next/navigation"
import { BrandShell } from "@/components/brand-shell"
import { getStationByKey } from "@/lib/stations"
import { StationKey } from "@/lib/types"

export default async function StationTypePage({
  params,
}: {
  params: Promise<{ station: StationKey }>
}) {
  const { station } = await params
  const stationData = getStationByKey(station)

  if (!stationData) return notFound()

  return (
    <BrandShell title={stationData.shortTitle} subtitle="Checklist türünü seç">
      <div className="grid gap-4">
        <Link
          href={`/checklist/${station}/opening`}
          className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
        >
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#c8a46b]">Açılış</p>
          <h2 className="mt-2 text-lg font-semibold">Açılış Checklist</h2>
          <p className="mt-2 text-sm leading-6 text-white/60">
            Gün başlangıcında operasyon hazırlığını kontrol et.
          </p>
        </Link>

        <Link
          href={`/checklist/${station}/closing`}
          className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
        >
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#c8a46b]">Kapanış</p>
          <h2 className="mt-2 text-lg font-semibold">Kapanış Checklist</h2>
          <p className="mt-2 text-sm leading-6 text-white/60">
            Gün sonu kapatma ve temizlik kontrollerini tamamla.
          </p>
        </Link>
      </div>
    </BrandShell>
  )
}