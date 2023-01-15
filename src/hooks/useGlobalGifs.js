import { useContext } from 'react'
import GifsContext from '../context/GifContext'

export default function useGlobalGifs () {
  const { gifs } = useContext(GifsContext)
  return gifs
}
