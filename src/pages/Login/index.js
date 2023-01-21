import React, { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import useUser from '../../hooks/useUser'

export default function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [path, navigate] = useLocation()
  const { login, isLogged, isLoginLoading, hasLoginError } = useUser()

  useEffect(() => {
    if (isLogged) navigate('/')
  }, [isLogged, navigate])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    login({ username, password })
  }
  const handleChangeUsername = (evt) => {
    setUsername(evt.target.value)
  }
  const handleChangePassword = (evt) => {
    setPassword(evt.target.value)
  }

  return (
    <>
      <h2>Login</h2>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading &&
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChangeUsername}
            placeholder='username'
            value={username}
          />
          <input
            onChange={handleChangePassword}
            type='password'
            placeholder='password'
            value={password}
          />
          <button>Login</button>
        </form>}
      {
          hasLoginError && <strong>Credentials are invalid</strong>
      }
    </>
  )
}
