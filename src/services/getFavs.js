const ENDPOINT = 'http://localhost:3001/api'

export default function getFavs ({ jwt }) {
  return fetch(`${ENDPOINT}/notes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`
    }
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => {
    const favorites = res
    return favorites
  })
}
