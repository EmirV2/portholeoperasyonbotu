"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { BrandShell } from "../../components/brand-shell"
import { stations } from "../../lib/stations"
import type { StationKey } from "../../lib/types"

export default function IssueReportPage() {
  const router = useRouter()
  const [station, setStation] = useState<StationKey>("bar-dishwasher")
  const [staffName, setStaffName] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!staffName.trim() || !title.trim() || !description.trim()) {
      alert("Lütfen gerekli alanları doldur.")
      return
    }

    try {
      setIsSubmitting(true)

      const response = await fetch("/api/issue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          station,
          staffName,
          title,
          description,
          priority,
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
      alert("Arıza bildirimi gönderilemedi.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <BrandShell title="Arıza Bildir" subtitle="Sorunları anında operasyon grubuna ilet">
      <div className="space-y-4">
        <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
          <label className="mb-2 block text-sm text-white/70">İstasyon</label>
          <select
            value={station}
            onChange={(e) => setStation(e.target.value as StationKey)}
            className="w-full rounded-2xl border border-white/10 bg-[#0d1015] px-4 py-3 text-sm outline-none"
          >
            {stations.map((item) => (
              <option key={item.key} value={item.key}>
                {item.title}
              </option>
            ))}
          </select>
        </div>

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
          <label className="mb-2 block text-sm text-white/70">Başlık</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Örn: Makine su almıyor"
            className="w-full rounded-2xl border border-white/10 bg-[#0d1015] px-4 py-3 text-sm outline-none placeholder:text-white/25"
          />
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
          <label className="mb-2 block text-sm text-white/70">Açıklama</label>
          <textarea
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Sorunu detaylı şekilde yaz"
            className="w-full rounded-2xl border border-white/10 bg-[#0d1015] px-4 py-3 text-sm outline-none placeholder:text-white/25"
          />
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
          <label className="mb-2 block text-sm text-white/70">Öncelik</label>
          <div className="grid grid-cols-3 gap-2">
            {(["low", "medium", "high"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setPriority(value)}
                className={`rounded-2xl border px-3 py-3 text-sm ${
                  priority === value
                    ? "border-[#c8a46b]/40 bg-[#c8a46b]/10 text-white"
                    : "border-white/10 bg-[#0d1015] text-white/70"
                }`}
              >
                {value === "low" ? "Düşük" : value === "medium" ? "Orta" : "Yüksek"}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full rounded-[22px] bg-[#c8a46b] px-4 py-4 text-sm font-semibold text-black transition hover:opacity-95 disabled:opacity-50"
        >
          {isSubmitting ? "Gönderiliyor..." : "Bildirimi Gönder"}
        </button>
      </div>
    </BrandShell>
  )
}
