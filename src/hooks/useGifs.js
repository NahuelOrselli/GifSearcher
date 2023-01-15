import { useContext, useEffect, useState } from 'react'
import GifsContext from '../context/GifContext'
import getGifs from '../services/getGifs'

const INITIAL_PAGE = 0

export function useGifs ({ keyword } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifsContext)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        localStorage.setItem('lastKeyword', keywordToUse)
      })
  }, [keyword, setGifs, keywordToUse])

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    setLoadingNextPage(true)
    getGifs({ keyword: keywordToUse, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
  }, [page, keywordToUse, setGifs])

  return { loading, loadingNextPage, gifs, setPage }
}
