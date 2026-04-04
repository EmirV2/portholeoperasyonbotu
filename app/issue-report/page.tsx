const handleSubmit = async () => {
  if (!staffName.trim() || !title.trim() || !description.trim()) {
    alert("Lütfen gerekli alanları doldur.")
    return
  }

  try {
    setIsSubmitting(true)

    const response = await fetch("/api/issue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        station,
        staffName,
        title,
        description,
        priority,
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
    alert(error instanceof Error ? error.message : "Arıza bildirimi gönderilemedi.")
  } finally {
    setIsSubmitting(false)
  }
}
