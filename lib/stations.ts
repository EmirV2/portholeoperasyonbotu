import { StationConfig, StationKey } from "./types"

export const stations: StationConfig[] = [
  {
    key: "bar-dishwasher",
    title: "Bar Tipi Bulaşık Makinesi",
    shortTitle: "Bar Makinesi",
    description: "Bar operasyonu için günlük kontrol ve kullanım listesi.",
    openingItems: [
      { id: "power-check", label: "Makinenin enerji bağlantısı kontrol edildi" },
      { id: "water-check", label: "Su girişi ve basınç kontrol edildi" },
      { id: "detergent-check", label: "Deterjan seviyesi kontrol edildi" },
      { id: "rinse-check", label: "Parlatıcı seviyesi kontrol edildi" },
      { id: "clean-filter", label: "Filtre temiz ve doğru takılmış" },
      { id: "empty-inside", label: "Makine içi boş ve temiz durumda" },
      { id: "test-run", label: "Test çalıştırması yapıldı" },
    ],
    closingItems: [
      { id: "drain-check", label: "Makine suyu boşaltıldı" },
      { id: "inside-clean", label: "İç hazne temizlendi" },
      { id: "filter-clean", label: "Filtre çıkarılıp temizlendi" },
      { id: "door-open", label: "Kapak havalandırma için açık bırakıldı" },
      { id: "surface-clean", label: "Dış yüzey temizlendi" },
      { id: "chemical-check", label: "Kimyasal seviyeleri not edildi" },
    ],
  },
  {
    key: "kitchen-dishwasher",
    title: "Mutfak Tipi Bulaşık Makinesi",
    shortTitle: "Mutfak Makinesi",
    description: "Mutfak operasyonu için günlük kontrol ve kullanım listesi.",
    openingItems: [
      { id: "power-main", label: "Ana enerji hattı kontrol edildi" },
      { id: "water-main", label: "Su beslemesi açık ve stabil" },
      { id: "tank-clean", label: "Yıkama tankı temiz durumda" },
      { id: "detergent-main", label: "Deterjan seviyesi yeterli" },
      { id: "rinse-main", label: "Parlatıcı seviyesi yeterli" },
      { id: "rack-check", label: "Sepetler düzgün ve hazır" },
      { id: "heat-check", label: "Isıtma sistemi test edildi" },
    ],
    closingItems: [
      { id: "drain-main", label: "Gün sonu su tahliyesi yapıldı" },
      { id: "tank-wash", label: "İç tank temizlendi" },
      { id: "filter-main", label: "Filtre temizlendi" },
      { id: "arms-clean", label: "Yıkama kolları kontrol edildi" },
      { id: "door-open-main", label: "Kapak açık bırakıldı" },
      { id: "surface-main", label: "Dış alan ve çevresi temizlendi" },
    ],
  },
]

export function getStationByKey(key: StationKey) {
  return stations.find((station) => station.key === key)
}
