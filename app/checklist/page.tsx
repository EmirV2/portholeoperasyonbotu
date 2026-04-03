import Link from "next/link";
import { stations } from "../../lib/stations";

export default function ChecklistListPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "24px 18px 40px",
      }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <Link
          href="/"
          style={{
            display: "inline-block",
            marginBottom: 20,
            color: "#c59b6d",
            fontFamily: "Inter, Arial, sans-serif",
          }}
        >
          ← Geri Dön
        </Link>

        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <h1 style={{ margin: 0, fontSize: 36, color: "#f8f2e9" }}>
            Operasyon Checklist
          </h1>
          <p
            style={{
              marginTop: 10,
              color: "rgba(244,239,231,0.72)",
              fontFamily: "Inter, Arial, sans-serif",
            }}
          >
            Kontrol formunu doldurmak istediğiniz makine tipini seçin.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 18,
          }}
        >
          {stations.map((station) => (
            <Link
              key={station.slug}
              href={`/checklist/${station.slug}`}
              style={{
                display: "block",
                border: "1px solid rgba(197,155,109,0.28)",
                borderRadius: 28,
                padding: 24,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#c59b6d",
                  marginBottom: 10,
                  fontFamily: "Inter, Arial, sans-serif",
                }}
              >
                Checklist
              </div>

              <div
                style={{
                  fontSize: 28,
                  lineHeight: 1.1,
                  fontWeight: 700,
                  color: "#f6efe5",
                }}
              >
                {station.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}