import React, { useContext } from 'react'
import { Link } from 'wouter'
import './style.css'

import useUser from '../../hooks/useUser'
import Context from '../../context/userContext'

export default function Header () {
  const { isLogged, logout } = useUser()
  const { favs } = useContext(Context)
  const handleClick = (e) => {
    e.preventDefault()
    logout()
  }

  return (
    <header className='gf-header'>
      {
        isLogged
          ? <Link to='#' onClick={handleClick}>Logout</Link>
          : (
            <>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </>
            )
      }
    </header>
  )
}
