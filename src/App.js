import React, { Suspense } from 'react'
import { Route, Link } from 'wouter'

import Detail from './pages/Detail/index'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import SearchResults from './pages/SearchResults/index'

import Header from './components/Header'

import { GifsContextProvider } from './context/GifContext'
import { UserContextProvider } from './context/userContext'

import './App.css'

const HomePage = React.lazy(() => import('./pages/Home'))

function App () {
  return (
    <UserContextProvider>
      <div className='App'>
        <Suspense fallback={null}>
          <section className='App-content'>
            <Header />
            <Link to='/'>
              Api Gifs
            </Link>
            <GifsContextProvider>
              <Route
                path='/'
                component={HomePage}
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
                path='/login'
                component={LoginPage}
              />
              <Route
                path='/register'
                component={RegisterPage}
              />
              <Route
                path='/404'
                component={() => <h1>Error 404 :( </h1>}
              />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>
  )
}

export default App
