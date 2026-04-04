return (
  <BrandShell
    title={station.shortTitle}
    subtitle={`${formatChecklistType(checklistType)} checklist formu`}
  >
    <div className="form-card">
      <label className="label">Personel Adı</label>
      <input
        value={staffName}
        onChange={(e) => setStaffName(e.target.value)}
        placeholder="Ad Soyad"
        className="input"
      />
    </div>

    <div className="form-card">
      <p className="label">Kontrol Maddeleri</p>

      <div className="checklist-list">
        {items.map((item) => {
          const active = selected.includes(item.id)

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggleItem(item.id)}
              className={`check-item ${active ? "active" : ""}`}
            >
              <div className="check-item-row">
                <div className="check-bullet">{active ? "✓" : ""}</div>
                <div className="check-text">{item.label}</div>
              </div>
            </button>
          )
        })}
      </div>
    </div>

    <div className="form-card">
      <label className="label">Not</label>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={4}
        placeholder="Opsiyonel not ekleyebilirsin"
        className="textarea"
      />
    </div>

    <button
      type="button"
      onClick={handleSubmit}
      disabled={isSubmitting}
      className="primary-button"
    >
      {isSubmitting ? "Gönderiliyor..." : "Checklist Gönder"}
    </button>
  </BrandShell>
)
