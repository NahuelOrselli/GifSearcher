import { useEffect, useState } from 'react'
import getSingleGif from '../services/getSingleGif'
import { useGifs } from './useGifs'

export default function useSingleGif ({ id }) {
  const { gifs } = useGifs()
  const gifsFromCache = gifs.find(singleGif => singleGif.id === id)
  const [gif, setGif] = useState(gifsFromCache)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!gif) {
      setIsLoading(true)
      getSingleGif({ id })
        .then(gif => {
          setGif(gif)
          setIsLoading(false)
          setIsError(false)
        }).catch(err => {
          setIsLoading(false)
          setIsError(true)
          console.log(err)
        })
    }
  }, [gif, id])
  return { gif, isError, isLoading }
}
