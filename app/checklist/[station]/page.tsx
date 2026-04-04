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
    <BrandShell title={stationData.shortTitle} subtitle="Checklist türünü seç">
      <div>
        <Link href={`/checklist/${station}/opening`}>Açılış Checklist</Link>
        <Link href={`/checklist/${station}/closing`}>Kapanış Checklist</Link>
      </div>
    </BrandShell>
  )
}
