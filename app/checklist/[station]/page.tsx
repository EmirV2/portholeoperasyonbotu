import { notFound } from "next/navigation";
import { stations } from "../../../lib/stations";

type Props = {
  params: Promise<{ station: string }>;
};

export default async function StationChecklistPage({ params }: Props) {
  const { station } = await params;
  const currentStation = stations.find((item) => item.slug === station);

  if (!currentStation) {
    notFound();
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "24px 18px 40px",
      }}
    >
      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          border: "1px solid rgba(197,155,109,0.28)",
          borderRadius: 28,
          padding: 22,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <img
            src="/logo.png"
            alt="Porthole"
            style={{
              width: 78,
              height: 78,
              objectFit: "contain",
              margin: "0 auto 14px",
              borderRadius: "999px",
              border: "1px solid rgba(197,155,109,0.35)",
              padding: 8,
              background: "rgba(255,255,255,0.03)",
            }}
          />

          <div
            style={{
              fontSize: 13,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#c59b6d",
              marginBottom: 10,
              fontFamily: "Inter, Arial, sans-serif",
            }}
          >
            Porthole Operasyon
          </div>

          <h1 style={{ margin: 0, fontSize: 34, color: "#f8f2e9" }}>
            {currentStation.name}
          </h1>

          <p
            style={{
              marginTop: 12,
              color: "rgba(244,239,231,0.72)",
              fontFamily: "Inter, Arial, sans-serif",
            }}
          >
            Kontrol adımlarını tamamlayın ve Telegram bildirimi için formu gönderin.
          </p>
        </div>

        <form
          action="/api/submit"
          method="POST"
          style={{ display: "grid", gap: 14 }}
        >
          <input type="hidden" name="station" value={currentStation.slug} />

          <div
            style={{
              display: "grid",
              gap: 12,
            }}
          >
            <label
              style={{
                fontFamily: "Inter, Arial, sans-serif",
                fontSize: 14,
                color: "#d8cbb9",
              }}
            >
              Personel Adı
            </label>

            <input
              name="staffName"
              required
              placeholder="Ad soyad giriniz"
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: 16,
                border: "1px solid rgba(197,155,109,0.25)",
                background: "rgba(255,255,255,0.04)",
                color: "#fff",
                outline: "none",
              }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gap: 10,
              marginTop: 8,
            }}
          >
            {currentStation.checks.map((check, index) => (
              <label
                key={`${currentStation.slug}-${index}`}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  padding: 14,
                  borderRadius: 16,
                  border: "1px solid rgba(197,155,109,0.14)",
                  background: "rgba(255,255,255,0.03)",
                  fontFamily: "Inter, Arial, sans-serif",
                  lineHeight: 1.5,
                  color: "#f0e6d8",
                }}
              >
                <input
                  type="checkbox"
                  name="completed"
                  value={check}
                  style={{ marginTop: 3 }}
                />
                <span>{check}</span>
              </label>
            ))}
          </div>

          <button
            type="submit"
            style={{
              marginTop: 10,
              border: "none",
              borderRadius: 18,
              padding: "16px 18px",
              background: "linear-gradient(180deg, #c59b6d 0%, #9f7347 100%)",
              color: "#120d08",
              fontWeight: 800,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Checklist Gönder
          </button>
        </form>
      </div>
    </main>
  );
}