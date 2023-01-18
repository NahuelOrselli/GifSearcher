import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import SearchForm from '../../components/SearchForm'
import TrendingSearches from '../../components/TrendingSearches'
import { useGifs } from '../../hooks/useGifs'

const POPULAR_GIFS = ['Argentina', 'Digimon', 'Pokemon']

export default function Home () {
  const { loading, gifs } = useGifs()

  return (
    <>
      <Helmet>
        <title>Home | Giffys</title>
        <meta
          name='description'
          content='Gifs Searcher for Free'
        />
      </Helmet>
      <h3>Buscador</h3>
      <SearchForm />
      <h3>Ultima Busqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3>Los gifs mas populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>
              Gifs de {popularGif}
            </Link>
          </li>
        ))}
      </ul>
      <TrendingSearches />
    </>
  )
}
