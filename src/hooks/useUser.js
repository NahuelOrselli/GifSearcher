import { useCallback, useContext, useState } from 'react'
import Context from '../context/userContext'
import loginService from '../services/login'
import addFav from '../services/addFav'

export default function useUser () {
  const { favs, jwt, setFavs, setJWT } = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(({ username, password }) => {
    setState({ loading: true, error: false })
    loginService({ username, password })
      .then(token => {
        window.sessionStorage.setItem('jwt', token)
        setState({ loading: false, error: false })
        setJWT(token)
      })
      .catch(err => {
        window.sessionStorage.removeItem('jwt')
        setState({ loading: false, error: true })
        console.error(err)
      })
  }, [setJWT])

  const addFavUser = useCallback(({ id }) => {
    addFav({ id, jwt })
      .then(fav => {
        setFavs(prevFav => prevFav.concat(fav))
      })
      .catch(err => {
        console.error(err)
      })
  }, [jwt, setFavs])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt')
    setJWT(null)
  }, [setJWT])

  return (
    {
      favs,
      addFavUser,
      isLogged: Boolean(jwt),
      login,
      logout,
      isLoginLoading: state.loading,
      hasLoginError: state.error
    }
  )
}
