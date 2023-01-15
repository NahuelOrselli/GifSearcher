import React, { useCallback, useEffect, useRef } from 'react'
import Spinner from '../../components/Spinner'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'
import useNearScreen from '../../hooks/useNearScreen'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'

export default function SearchResults ({ params }) {
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [setPage])

  const title = gifs ? `${gifs.length} gifs de ${keyword}` : ''

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return (
    <>
      {
      loading
        ? <Spinner />
        : (
          <>
            <Helmet>
              <title>{title}</title>
              <meta name='description' content={title} />
            </Helmet>
            <h3 className='App-tittle'>
              {decodeURI(keyword)}
            </h3>
            <ListOfGifs gifs={gifs} />
            <div ref={externalRef} />
          </>
          )
        }
    </>
  )
}
