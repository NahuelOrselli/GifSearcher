const ENDPOINT = 'http://localhost:3001/api'

export default function addFav ({ id, jwt }) {
  return fetch(`${ENDPOINT}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`
    },
    body: JSON.stringify({ content: id, important: true })
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => {
    const savedNote = res
    return savedNote.content
  })
}
