import { ChecklistPayload, IssuePayload } from "./types"
import { buildProgressBar, formatChecklistType, formatStationLabel } from "./utils"

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

async function sendTelegramMessage(text: string) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    throw new Error("Telegram environment variables eksik.")
  }

  const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Telegram gönderimi başarısız: ${errorText}`)
  }

  return response.json()
}

export async function sendChecklistToTelegram(payload: ChecklistPayload) {
  const total = payload.checkedItems.length + payload.uncheckedItems.length
  const completionRate = total === 0 ? 0 : Math.round((payload.checkedItems.length / total) * 100)
  const progressBar = buildProgressBar(completionRate)

  const missingText =
    payload.uncheckedItems.length > 0
      ? payload.uncheckedItems.map((item) => `• ${item}`).join("\n")
      : "• Eksik madde yok"

  const photoText =
    payload.photoUrls && payload.photoUrls.length > 0
      ? payload.photoUrls.map((url) => `• ${url}`).join("\n")
      : "• Fotoğraf eklenmedi"

  const text = [
    `📋 PORTHOLE OPERASYON RAPORU`,
    ``,
    `İstasyon: ${formatStationLabel(payload.station)}`,
    `Kontrol Tipi: ${formatChecklistType(payload.checklistType)}`,
    `Personel: ${payload.staffName}`,
    ``,
    `Tamamlanma: %${completionRate}`,
    `${progressBar}`,
    ``,
    `✅ Tamamlanan Madde: ${payload.checkedItems.length}/${total}`,
    ``,
    `❌ Eksik Maddeler:`,
    `${missingText}`,
    ``,
    `📝 Not:`,
    `${payload.note?.trim() || "• Not girilmedi"}`,
    ``,
    `📷 Fotoğraflar:`,
    `${photoText}`,
  ].join("\n")

  return sendTelegramMessage(text)
}

export async function sendIssueToTelegram(payload: IssuePayload) {
  const photoText =
    payload.photoUrls && payload.photoUrls.length > 0
      ? payload.photoUrls.map((url) => `• ${url}`).join("\n")
      : "• Fotoğraf eklenmedi"

  const text = [
    `🚨 PORTHOLE ARIZA / BİLDİRİM`,
    ``,
    `İstasyon: ${formatStationLabel(payload.station)}`,
    `Personel: ${payload.staffName}`,
    `Öncelik: ${payload.priority || "medium"}`,
    ``,
    `Başlık: ${payload.title}`,
    ``,
    `Açıklama:`,
    `${payload.description}`,
    ``,
    `📷 Fotoğraflar:`,
    `${photoText}`,
  ].join("\n")

  return sendTelegramMessage(text)
}
