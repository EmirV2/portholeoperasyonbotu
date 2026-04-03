import { stations } from "../../../lib/stations";

function buildProgressBar(percent: number) {
  const totalBlocks = 10;
  const filledBlocks = Math.round((percent / 100) * totalBlocks);
  const emptyBlocks = totalBlocks - filledBlocks;

  return `${"█".repeat(filledBlocks)}${"░".repeat(emptyBlocks)}`;
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const stationSlug = String(formData.get("station") || "");
    const staffName = String(formData.get("staffName") || "Belirtilmedi");
    const completed = formData.getAll("completed").map(String);

    const station = stations.find((s) => s.slug === stationSlug);

    if (!station) {
      return new Response("Station not found", { status: 404 });
    }

    const missing = station.checks.filter((item) => !completed.includes(item));
    const totalChecks = station.checks.length;
    const completedCount = completed.length;
    const percent = totalChecks > 0 ? Math.round((completedCount / totalChecks) * 100) : 0;
    const progressBar = buildProgressBar(percent);

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return new Response("Telegram env eksik", { status: 500 });
    }

    const completedText =
      completedCount > 0
        ? completed.map((item) => `✅ ${item}`).join("\n")
        : "Yok";

    const missingText =
      missing.length > 0
        ? missing.map((item) => `❌ ${item}`).join("\n")
        : "Eksik madde yok";

    const statusText =
      percent === 100 ? "TÜM MADDELER TAMAMLANDI" : "EKSİK MADDE VAR";

    const message = [
      `📋 PORTHOLE CHECKLIST BİLDİRİMİ`,
      ``,
      `📍 İstasyon: ${station.name}`,
      `👤 Personel: ${staffName}`,
      `🕒 Saat: ${new Date().toLocaleString("tr-TR")}`,
      ``,
      `📊 Tamamlanma Durumu`,
      `${progressBar} %${percent}`,
      `${completedCount}/${totalChecks} madde tamamlandı`,
      `Durum: ${statusText}`,
      ``,
      `✅ Tamamlanan Maddeler`,
      completedText,
      ``,
      `❌ Tamamlanmayan Maddeler`,
      missingText,
    ].join("\n");

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      }
    );

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text();
      console.error("Telegram gönderim hatası:", errorText);
      return new Response("Telegram gönderim hatası", { status: 500 });
    }

    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("Submit route hatası:", error);
    return new Response("Sunucu hatası", { status: 500 });
  }
}
