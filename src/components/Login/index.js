import React, { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import useUser from '../../hooks/useUser'
import './Login.css'

export default function Login ({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [path, navigate] = useLocation()
  const { login, isLogged, isLoginLoading, hasLoginError } = useUser()

  useEffect(() => {
    if (isLogged) {
      navigate('/')
      onLogin && onLogin()
    }
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
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading &&
        <form className='form' onSubmit={handleSubmit}>
          <label>Username:
            <input
              onChange={handleChangeUsername}
              placeholder='username'
              value={username}
            />
          </label>
          <label>Password:
            <input
              onChange={handleChangePassword}
              type='password'
              placeholder='password'
              value={password}
            />
          </label>

          <button className='btn'>Login</button>
        </form>}
      {
          hasLoginError && <strong>Credentials are invalid</strong>
      }
    </>
  )
}
