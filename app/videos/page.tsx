import Link from "next/link";
import { stations } from "../../lib/stations";

export default function VideosPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "24px 18px 40px",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
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
            Kullanım Videoları
          </h1>
          <p
            style={{
              marginTop: 10,
              color: "rgba(244,239,231,0.72)",
              fontFamily: "Inter, Arial, sans-serif",
            }}
          >
            İlgili makine tipini seçerek kullanım videosunu izleyin.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 18,
          }}
        >
          {stations.map((station) => (
            <div
              key={station.slug}
              style={{
                border: "1px solid rgba(197,155,109,0.28)",
                borderRadius: 28,
                padding: 18,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  marginBottom: 14,
                  color: "#f6efe5",
                }}
              >
                {station.name}
              </div>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "56.25%",
                  borderRadius: 18,
                  overflow: "hidden",
                  border: "1px solid rgba(197,155,109,0.2)",
                }}
              >
                <iframe
                  src={station.videoUrl}
                  title={station.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: "0",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}