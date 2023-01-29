import React from 'react'
import { Helmet } from 'react-helmet'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import SearchForm from '../../components/SearchForm'
import TrendingSearches from '../../components/TrendingSearches'
import { useGifs } from '../../hooks/useGifs'

export default function Home () {
  const { loading, gifs } = useGifs()

  return (
    <>
      <Helmet>
        <title>Home | Gif Searcher</title>
        <meta
          name='description'
          content='Gifs Searcher for Free'
        />
      </Helmet>
      <header className='o-header'>
        <SearchForm />
      </header>
      <div className='App-wrapper'>
        <div className='App-main'>
          <div className='App-results'>
            <h3 className='App-title'>Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
          </div>
          <div className='App-category'>
            <TrendingSearches />
          </div>
        </div>
      </div>
    </>
  )
}
