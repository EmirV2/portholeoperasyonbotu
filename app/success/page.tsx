import Link from "next/link"
import { BrandShell } from "../../components/brand-shell"

export default function SuccessPage() {
  return (
    <BrandShell title="Gönderim Başarılı" subtitle="Rapor başarıyla iletildi">
      <section className="success-card">
        <div className="success-icon">✓</div>
        <h2 className="success-title">İşlem tamamlandı</h2>
        <p className="success-text">
          Gönderdiğin rapor başarıyla işlendi ve ilgili kanala iletildi.
        </p>
      </section>

      <div className="dual-actions">
        <Link href="/" className="primary-button">
          Ana Sayfaya Dön
        </Link>

        <Link href="/checklist" className="secondary-link">
          Yeni Checklist Başlat
        </Link>
      </div>
    </BrandShell>
  )
}
