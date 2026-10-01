import { EXTRA_CARS, applyCarUpdate } from './inventoryUpdates'

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

export async function fetchInventory() {
  const cars = await fetchCars()
  return [...EXTRA_CARS, ...cars.map(applyCarUpdate)]
}

export async function fetchInventoryCar(id) {
  const extra = EXTRA_CARS.find((car) => car.id === id)
  if (extra) return extra
  return applyCarUpdate(await fetchCarById(id))
}
