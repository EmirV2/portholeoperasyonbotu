import type { ChecklistPayload, IssuePayload } from "./types"
import { buildProgressBar, formatChecklistType, formatStationLabel } from "./utils"

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const CHAT_ID = process.env.TELEGRAM_CHAT_ID

function ensureTelegramEnv() {
  if (!BOT_TOKEN) {
    throw new Error("TELEGRAM_BOT_TOKEN tanımlı değil.")
  }

  if (!CHAT_ID) {
    throw new Error("TELEGRAM_CHAT_ID tanımlı değil.")
  }
}

async function sendTelegramMessage(text: string) {
  ensureTelegramEnv()

  const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
    }),
    cache: "no-store",
  })

  const data = await response.json()

  if (!response.ok || !data?.ok) {
    throw new Error(data?.description || "Telegram API gönderim hatası.")
  }

  return data
}

export async function sendChecklistToTelegram(payload: ChecklistPayload) {
  const total = payload.checkedItems.length + payload.uncheckedItems.length
  const completionRate = total === 0 ? 0 : Math.round((payload.checkedItems.length / total) * 100)
  const progressBar = buildProgressBar(completionRate)

  const checkedText =
    payload.checkedItems.length > 0
      ? payload.checkedItems.map((item) => `• ${item}`).join("\n")
      : "• Tamamlanan madde yok"

  const missingText =
    payload.uncheckedItems.length > 0
      ? payload.uncheckedItems.map((item) => `• ${item}`).join("\n")
      : "• Eksik madde yok"

  const noteText = payload.note?.trim() ? payload.note.trim() : "• Not girilmedi"

  const photoText =
    payload.photoUrls && payload.photoUrls.length > 0
      ? payload.photoUrls.map((url) => `• ${url}`).join("\n")
      : "• Fotoğraf eklenmedi"

  const text = [
    "📋 PORTHOLE OPERASYON RAPORU",
    "",
    `İstasyon: ${formatStationLabel(payload.station)}`,
    `Kontrol Tipi: ${formatChecklistType(payload.checklistType)}`,
    `Personel: ${payload.staffName}`,
    "",
    `Tamamlanma: %${completionRate}`,
    progressBar,
    "",
    `✅ Tamamlananlar (${payload.checkedItems.length}/${total})`,
    checkedText,
    "",
    `❌ Eksik Maddeler`,
    missingText,
    "",
    "📝 Not",
    noteText,
    "",
    "📷 Fotoğraflar",
    photoText,
  ].join("\n")

  return sendTelegramMessage(text)
}

export async function sendIssueToTelegram(payload: IssuePayload) {
  const photoText =
    payload.photoUrls && payload.photoUrls.length > 0
      ? payload.photoUrls.map((url) => `• ${url}`).join("\n")
      : "• Fotoğraf eklenmedi"

  const text = [
    "🚨 PORTHOLE ARIZA / BİLDİRİM",
    "",
    `İstasyon: ${formatStationLabel(payload.station)}`,
    `Personel: ${payload.staffName}`,
    `Öncelik: ${payload.priority || "medium"}`,
    "",
    `Başlık: ${payload.title}`,
    "",
    "Açıklama:",
    payload.description,
    "",
    "📷 Fotoğraflar",
    photoText,
  ].join("\n")

  return sendTelegramMessage(text)
}
