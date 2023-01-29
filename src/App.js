import React, { Suspense } from 'react'
import { Route, Link } from 'wouter'

import Detail from './pages/Detail/index'
import ErrorPage from './pages/ErrorPage'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import SearchResults from './pages/SearchResults/index'

import Header from './components/Header'

import { GifsContextProvider } from './context/GifContext'
import { UserContextProvider } from './context/userContext'

import './App.css'
import Logo from './logo.png'

const HomePage = React.lazy(() => import('./pages/Home'))

function App () {
  return (
    <UserContextProvider>
      <div className='App'>
        <Suspense fallback={null}>
          <section className='App-content'>
            <Header />
            <Link to='/'>
              <figure className='App-logo'>
                <img alt='logo' src={Logo} />
              </figure>
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
                component={ErrorPage}
              />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>
  )
}

export default App
