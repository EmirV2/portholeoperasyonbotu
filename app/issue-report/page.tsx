"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { BrandShell } from "../../components/brand-shell"
import { stations } from "../../lib/stations"
import type { StationKey } from "../../lib/types"

type Priority = "low" | "medium" | "high"

export default function IssueReportPage() {
  const router = useRouter()

  const [station, setStation] = useState<StationKey>("bar-dishwasher")
  const [staffName, setStaffName] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState<Priority>("medium")
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

      const result = await response.json()

      if (!response.ok || !result?.ok) {
        throw new Error(result?.message || "Gönderim başarısız")
      }

      router.push("/success")
    } catch (error) {
      console.error(error)
      alert(error instanceof Error ? error.message : "Arıza bildirimi gönderilemedi.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <BrandShell
      title="Arıza / Eksik Bildir"
      subtitle="Sorunları anında operasyon grubuna ilet"
    >
      <section className="hero-card">
        <p className="hero-label">Hızlı Bildirim</p>
        <h2 className="hero-title">
          Sorunu hızlıca
          <br />
          raporla
        </h2>
        <p className="hero-text">
          İstasyon seç, kısa başlık gir, problemi açık şekilde yaz ve bildirimi gönder.
        </p>
      </section>

      <div className="form-card">
        <label className="label">İstasyon</label>
        <select
          value={station}
          onChange={(e) => setStation(e.target.value as StationKey)}
          className="select"
        >
          {stations.map((item) => (
            <option key={item.key} value={item.key}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

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
        <label className="label">Başlık</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Örn: Makine su almıyor"
          className="input"
        />
      </div>

      <div className="form-card">
        <label className="label">Açıklama</label>
        <textarea
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Sorunu detaylı şekilde yaz"
          className="textarea"
        />
      </div>

      <div className="form-card">
        <label className="label">Öncelik</label>
        <div className="issue-priority-list">
          {(["low", "medium", "high"] as const).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setPriority(value)}
              className={`check-item ${priority === value ? "active" : ""}`}
            >
              <div className="check-item-row">
                <div className="check-bullet">{priority === value ? "✓" : ""}</div>
                <div className="check-text">
                  {value === "low" ? "Düşük Öncelik" : value === "medium" ? "Orta Öncelik" : "Yüksek Öncelik"}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="primary-button"
      >
        {isSubmitting ? "Gönderiliyor..." : "Bildirimi Gönder"}
      </button>
    </BrandShell>
  )
}
