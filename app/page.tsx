import Link from "next/link";

function LuxuryCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        border: "1px solid rgba(197, 155, 109, 0.28)",
        borderRadius: 28,
        padding: 24,
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
        backdropFilter: "blur(14px)",
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
        Porthole
      </div>

      <div
        style={{
          fontSize: 30,
          lineHeight: 1.05,
          fontWeight: 700,
          marginBottom: 12,
          color: "#f6efe5",
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: "rgba(244,239,231,0.72)",
          fontSize: 16,
          lineHeight: 1.6,
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        {description}
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "28px 18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 980,
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: 28,
          }}
        >
          <img
            src="/logo.png"
            alt="Porthole"
            style={{
              width: 92,
              height: 92,
              objectFit: "contain",
              margin: "0 auto 18px",
              borderRadius: "999px",
              border: "1px solid rgba(197,155,109,0.35)",
              padding: 10,
              background: "rgba(255,255,255,0.03)",
            }}
          />

          <div
            style={{
              fontSize: 14,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#c59b6d",
              marginBottom: 10,
              fontFamily: "Inter, Arial, sans-serif",
            }}
          >
            Porthole Operasyon
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: 42,
              lineHeight: 1.05,
              fontWeight: 700,
              color: "#f8f2e9",
            }}
          >
            Bulaşık Makinesi
            <br />
            Operasyon Paneli
          </h1>

          <p
            style={{
              margin: "16px auto 0",
              maxWidth: 720,
              color: "rgba(244,239,231,0.72)",
              fontSize: 16,
              lineHeight: 1.7,
              fontFamily: "Inter, Arial, sans-serif",
            }}
          >
            Kullanım videolarına erişin veya operasyon checklist adımlarını
            doldurarak süreci kaydedin.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 18,
          }}
        >
          <LuxuryCard
            href="/videos"
            title="Kullanım Videoları"
            description="Bar ve mutfak tipi bulaşık makineleri için eğitim videolarını izleyin."
          />

          <LuxuryCard
            href="/checklist"
            title="Operasyon Checklist"
            description="Günlük kontrol adımlarını seçin ve ilgili operasyon formuna geçin."
          />
        </div>
      </div>
    </main>
  );
}