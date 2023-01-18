import React from 'react'
import './App.css'
import { Route, Link } from 'wouter'
import Home from './pages/Home/index'
import SearchResults from './pages/SearchResults/index'
import Detail from './pages/Detail/index'
import { GifsContextProvider } from './context/GifContext'

function App () {
  return (
    <div className='App'>
      <section className='App-content'>
        <Link to='/'>
          Api Gifs
        </Link>
        <GifsContextProvider>
          <Route
            path='/'
            component={Home}
          />
          <Route
            path='/search/:keyword/:rating?'
            component={SearchResults}
          />
          <Route
            path='/gif/:id'
            component={Detail}
          />
          <Route
            path='/404'
            component={() => <h1>Error 404 :( </h1>}
          />
        </GifsContextProvider>
      </section>

    </div>
  )
}

export default App
