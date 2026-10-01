export async function fetchCars() {
  const res = await fetch('/api/cars')
  if (!res.ok) throw new Error('Failed to load cars')
  return res.json()
}

export async function fetchCarById(id) {
  const res = await fetch(`/api/cars/${id}`)
  if (res.status === 404) return null
  if (!res.ok) throw new Error('Failed to load car')
  return res.json()
}
