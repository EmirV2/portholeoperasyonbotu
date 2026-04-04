const handleSubmit = async () => {
  if (!staffName.trim()) {
    alert("Lütfen personel adını gir.")
    return
  }

  try {
    setIsSubmitting(true)

    const checkedItems = items
      .filter((item) => selected.includes(item.id))
      .map((item) => item.label)

    const uncheckedItems = items
      .filter((item) => !selected.includes(item.id))
      .map((item) => item.label)

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        station: station.key,
        checklistType,
        staffName,
        checkedItems,
        uncheckedItems,
        note,
        photoUrls: [],
      }),
    })

    const result = await response.json()

    if (!response.ok || !result?.ok) {
      throw new Error(result?.message || "Gönderim başarısız")
    }

    router.push("/success")
  } catch (error) {
    console.error(error)
    alert(error instanceof Error ? error.message : "Gönderim sırasında hata oluştu.")
  } finally {
    setIsSubmitting(false)
  }
}
