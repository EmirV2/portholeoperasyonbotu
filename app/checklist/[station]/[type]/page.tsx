"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { BrandShell } from "../../../../components/brand-shell"
import { getStationByKey } from "../../../../lib/stations"
import type { ChecklistItem, ChecklistType, StationKey } from "../../../../lib/types"
import { formatChecklistType } from "../../../../lib/utils"

export default function ChecklistFormPage({
  params,
}: {
  params: { station: StationKey; type: ChecklistType }
}) {
  const router = useRouter()
  const station = getStationByKey(params.station)

  const items = useMemo<ChecklistItem[]>(() => {
    if (!station) return []
    return params.type === "opening" ? station.openingItems : station.closingItems
  }, [station, params.type])

  const [staffName, setStaffName] = useState("")
  const [note, setNote] = useState("")
  const [selected, setSelected] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!station) {
    return <BrandShell title="Bulunamadı">İstasyon bulunamadı.</BrandShell>
  }

  const toggleItem = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const handleSubmit = async () => {
    if (!staffName.trim()) {
      alert("Lütfen personel adını gir.")
      return
    }

    try {
      setIsSubmitting(true)

      const checkedItems = items
        .filter((item) => selected.includes(item.id))
        .map((item) => item.label)

      const uncheckedItems = items
        .filter((item) => !selected.includes(item.id))
        .map((item) => item.label)

      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          station: station.key,
          checklistType: params.type,
          staffName,
          checkedItems,
          uncheckedItems,
          note,
          photoUrls: [],
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error?.message || "Gönderim başarısız")
      }

      router.push("/success")
    } catch (error) {
      console.error(error)
      alert("Gönderim sırasında hata oluştu.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <BrandShell
      title={station.shortTitle}
      subtitle={`${formatChecklistType(params.type)} checklist formu`}
    >
      <div className="space-y-4">
        <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
          <label className="mb-2 block text-sm text-white/70">Personel Adı</label>
          <input
            value={staffName}
            onChange={(e) => setStaffName(e.target.value)}
            placeholder="Ad Soyad"
            className="w-full rounded-2xl border border-white/10 bg-[#0d1015] px-4 py-3 text-sm outline-none placeholder:text-white/25"
          />
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
          <p className="mb-3 text-sm text-white/70">Kontrol Maddeleri</p>
          <div className="space-y-3">
            {items.map((item) => {
              const active = selected.includes(item.id)

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
                    active
                      ? "border-[#c8a46b]/40 bg-[#c8a46b]/10 text-white"
                      : "border-white/10 bg-[#0d1015] text-white/75"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] ${
                        active
                          ? "border-[#c8a46b] bg-[#c8a46b] text-black"
                          : "border-white/20 text-transparent"
                      }`}
                    >
                      ✓
                    </div>
                    <span className="text-sm leading-6">{item.label}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
          <label className="mb-2 block text-sm text-white/70">Not</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={4}
            placeholder="Opsiyonel not ekleyebilirsin"
            className="w-full rounded-2xl border border-white/10 bg-[#0d1015] px-4 py-3 text-sm outline-none placeholder:text-white/25"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full rounded-[22px] bg-[#c8a46b] px-4 py-4 text-sm font-semibold text-black transition hover:opacity-95 disabled:opacity-50"
        >
          {isSubmitting ? "Gönderiliyor..." : "Checklist Gönder"}
        </button>
      </div>
    </BrandShell>
  )
}
