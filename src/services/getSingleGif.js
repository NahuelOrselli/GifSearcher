import { API_URL, API_KEY } from './settings'

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse
  const { images, title, id } = data
  const { url } = images.downsized_medium
  return { title, id, url }
}

export default function getSingleGif ({ id }) {
  const apiURL = `${API_URL}/gifs/${id}?api_key=${API_KEY}`
  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}
