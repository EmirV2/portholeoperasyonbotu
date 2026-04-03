import { NextRequest, NextResponse } from "next/server"
import { sendIssueToTelegram } from "../../../lib/telegram"
import type { IssuePayload } from "../../../lib/types"

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as IssuePayload

    if (!body.station || !body.staffName || !body.title || !body.description) {
      return NextResponse.json(
        { message: "Eksik zorunlu alanlar var." },
        { status: 400 }
      )
    }

    await sendIssueToTelegram(body)

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Issue submit error:", error)
    return NextResponse.json(
      { message: "Arıza bildirimi gönderimi başarısız oldu." },
      { status: 500 }
    )
  }
}
