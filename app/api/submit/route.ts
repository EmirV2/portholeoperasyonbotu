import { NextRequest, NextResponse } from "next/server"
import { sendChecklistToTelegram } from "@/lib/telegram"
import { ChecklistPayload } from "@/lib/types"

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ChecklistPayload

    if (!body.station || !body.checklistType || !body.staffName) {
      return NextResponse.json(
        { message: "Eksik zorunlu alanlar var." },
        { status: 400 }
      )
    }

    await sendChecklistToTelegram(body)

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Checklist submit error:", error)
    return NextResponse.json(
      { message: "Checklist gönderimi başarısız oldu." },
      { status: 500 }
    )
  }
}