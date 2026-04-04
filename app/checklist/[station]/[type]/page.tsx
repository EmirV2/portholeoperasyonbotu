"use client"

import { useMemo, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { BrandShell } from "../../../../components/brand-shell"
import { getStationByKey } from "../../../../lib/stations"
import type { ChecklistItem, ChecklistType, StationKey } from "../../../../lib/types"
import { formatChecklistType } from "../../../../lib/utils"

export default function ChecklistFormPage() {
  const router = useRouter()
  const params = useParams<{ station: string; type: string }>()

  const stationKey = params.station as StationKey
  const checklistType = params.type as ChecklistType
  const station = getStationByKey(stationKey)

  const items = useMemo<ChecklistItem[]>(() => {
    if (!station) return []
    return checklistType === "opening" ? station.openingItems : station.closingItems
  }, [station, checklistType])

  const [staffName, setStaffName] = useState("")
  const [note, setNote] = useState("")
  const [selected, setSelected] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!station) {
    return (
      <BrandShell title="Bulunamadı" subtitle="İstasyon bilgisi alınamadı">
        <div className="form-card">İstasyon bulunamadı.</div>
      </BrandShell>
    )
  }

  if (checklistType !== "opening" && checklistType !== "closing") {
    return (
      <BrandShell title="Bulunamadı" subtitle="Checklist türü geçersiz">
        <div className="form-card">Checklist türü geçersiz.</div>
      </BrandShell>
    )
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
          checklistType,
          staffName,
          checkedItems,
          uncheckedItems,
          note,
          photoUrls: [],
        }),
      })

      const result = await response.json()

      if (!response.ok || !result?.ok) {
        throw new Error(result?.message || "Gönderim başarısız")
      }

      router.push("/success")
    } catch (error) {
      console.error(error)
      alert(error instanceof Error ? error.message : "Gönderim sırasında hata oluştu.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <BrandShell
      title={station.shortTitle}
      subtitle={`${formatChecklistType(checklistType)} checklist formu`}
    >
      <div className="form-card">
        <label className="label">Personel Adı</label>
        <input
          value={staffName}
          onChange={(e) => setStaffName(e.target.value)}
          placeholder="Ad Soyad"
          className="input"
        />
      </div>

      <div className="form-card">
        <p className="label">Kontrol Maddeleri</p>

        <div className="checklist-list">
          {items.map((item) => {
            const active = selected.includes(item.id)

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleItem(item.id)}
                className={`check-item ${active ? "active" : ""}`}
              >
                <div className="check-item-row">
                  <div className="check-bullet">{active ? "✓" : ""}</div>
                  <div className="check-text">{item.label}</div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="form-card">
        <label className="label">Not</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={4}
          placeholder="Opsiyonel not ekleyebilirsin"
          className="textarea"
        />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="primary-button"
      >
        {isSubmitting ? "Gönderiliyor..." : "Checklist Gönder"}
      </button>
    </BrandShell>
  )
}
