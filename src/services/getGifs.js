import { API_URL, API_KEY } from './settings'

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const { images, title, id } = image
      const { url } = images.downsized_medium
      return { title, id, url }
    })
    return gifs
  }
  return []
}

export default function getGifs ({ keyword = 'Morty', limit = 8, page = 0, rating } = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${limit * page}&rating=${rating}&lang=en'`
  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}
