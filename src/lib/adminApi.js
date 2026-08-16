async function request(url, options) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  const isJson = res.headers.get('content-type')?.includes('application/json')
  const body = isJson ? await res.json() : null
  if (!res.ok) {
    throw new Error(body?.error || `Request failed (${res.status})`)
  }
  return body
}

export function login(email, password) {
  return request('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) })
}

export function logout() {
  return request('/api/auth/logout', { method: 'POST' })
}

export function me() {
  return request('/api/auth/me')
}

export function listSoldCars() {
  return request('/api/cars?status=sold')
}

export function createCar(car) {
  return request('/api/cars', { method: 'POST', body: JSON.stringify(car) })
}

export function updateCar(id, car) {
  return request(`/api/cars/${id}`, { method: 'PUT', body: JSON.stringify(car) })
}

export function deleteCar(id) {
  return request(`/api/cars/${id}`, { method: 'DELETE' })
}

export function markSold(id, { buyerName, soldPrice, soldNotes }) {
  return request(`/api/cars/${id}/sold`, {
    method: 'POST',
    body: JSON.stringify({ buyerName, soldPrice, soldNotes }),
  })
}

export function restoreCar(id) {
  return request(`/api/cars/${id}/restore`, { method: 'POST' })
}

export function uploadImage(dataUrl) {
  return request('/api/upload', { method: 'POST', body: JSON.stringify({ file: dataUrl }) })
}
