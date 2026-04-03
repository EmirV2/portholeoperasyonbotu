export type ChecklistType = "opening" | "closing"

export type StationKey = "bar-dishwasher" | "kitchen-dishwasher"

export type ChecklistItem = {
  id: string
  label: string
}

export type StationConfig = {
  key: StationKey
  title: string
  shortTitle: string
  description: string
  openingItems: ChecklistItem[]
  closingItems: ChecklistItem[]
}

export type ChecklistPayload = {
  station: StationKey
  checklistType: ChecklistType
  staffName: string
  checkedItems: string[]
  uncheckedItems: string[]
  note?: string
  photoUrls?: string[]
}

export type IssuePayload = {
  station: StationKey
  staffName: string
  title: string
  description: string
  priority?: "low" | "medium" | "high"
  photoUrls?: string[]
}