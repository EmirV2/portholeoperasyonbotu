export type Station = {
  slug: string;
  name: string;
  shortName: string;
  videoUrl: string;
  checks: string[];
};

export const stations: Station[] = [
  {
    slug: "bar-bulasik",
    name: "Bar Tipi Bulaşık Makinesi",
    shortName: "Bar",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_BAR",
    checks: [
      "Su, elektrik ve kimyasal seviyelerini kontrol ediniz.",
      "Makinenin çalışma sıcaklığına ulaşmasını bekleyiniz.",
      "Ürünleri ön durulamadan geçiriniz.",
      "Bardakları ters, tabakları aralıklı yerleştiriniz.",
      "Aşırı yükleme yapmayınız.",
      "Uygun programı seçiniz ve başlatınız.",
      "Yıkama tamamlanmadan kapağı açmayınız.",
      "Temiz ürünleri bekletmeden alınız.",
      "Buhar çıkışına dikkat ediniz.",
      "Filtreyi temizleyiniz.",
      "Makine içini durulayınız.",
      "Kapağı açık bırakınız.",
    ],
  },
  {
    slug: "mutfak-bulasik",
    name: "Mutfak Tipi Bulaşık Makinesi",
    shortName: "Mutfak",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_MUTFAK",
    checks: [
      "Su, elektrik ve kimyasal seviyelerini kontrol ediniz.",
      "Makinenin çalışma sıcaklığına ulaşmasını bekleyiniz.",
      "Filtrelerin doğru şekilde yerleştirildiğinden emin olunuz.",
      "Ürünleri kaba kirlerinden arındırınız (ön durulama).",
      "Tabakları dik ve aralıklı yerleştiriniz.",
      "Tencere ve büyük ekipmanları uygun sepete yerleştiriniz.",
      "Aşırı yükleme yapmayınız.",
      "Uygun programı seçiniz (kısa / yoğun).",
      "Kapağı kapatıp makineyi başlatınız.",
      "Yıkama bitmeden kapağı açmayınız.",
      "Temiz ürünleri bekletmeden alınız.",
      "Buhar çıkışına dikkat ediniz.",
      "Sepetleri boş bırakmayınız.",
    ],
  },
];