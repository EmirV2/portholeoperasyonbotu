export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

export function getCompletionRate(total: number, checked: number) {
  if (total <= 0) return 0
  return Math.round((checked / total) * 100)
}

export function buildProgressBar(rate: number) {
  const totalBlocks = 10
  const filled = Math.round((rate / 100) * totalBlocks)
  return "█".repeat(filled) + "░".repeat(totalBlocks - filled)
}

export function formatChecklistType(type: "opening" | "closing") {
  return type === "opening" ? "Açılış" : "Kapanış"
}

export function formatStationLabel(key: string) {
  switch (key) {
    case "bar-dishwasher":
      return "Bar Tipi Bulaşık Makinesi"
    case "kitchen-dishwasher":
      return "Mutfak Tipi Bulaşık Makinesi"
    default:
      return key
  }
}