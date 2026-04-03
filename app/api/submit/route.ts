import { stations } from "../../../lib/stations";

export async function POST(req: Request) {
  const formData = await req.formData();

  const stationSlug = formData.get("station") as string;
  const staffName = formData.get("staffName") as string;
  const completed = formData.getAll("completed") as string[];

  const station = stations.find((s) => s.slug === stationSlug);

  if (!station) {
    return new Response("Station not found", { status: 404 });
  }

  const missing = station.checks.filter(
    (item) => !completed.includes(item)
  );

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const message = `
PORTHOLE OPERASYON

İstasyon: ${station.name}
Personel: ${staffName}
Saat: ${new Date().toLocaleString("tr-TR")}

Tamamlanan:
${completed.map((c) => "- " + c).join("\n")}

Eksik:
${missing.map((c) => "- " + c).join("\n")}
`;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  });

  return new Response("OK");
}