const ENDPOINT = 'http://localhost:3001/api'

export default function register ({ username, name, password }) {
  return fetch(`${ENDPOINT}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, name, password })
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return true
  })
}
