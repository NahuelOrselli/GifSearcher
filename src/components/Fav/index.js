import React, { useState } from 'react'
import useUser from '../../hooks/useUser'
import Login from '../Login'
import Modal from '../Modal'
import './styles.css'

export default function Fav ({ id }) {
  const { isLogged, addFavUser, favs } = useUser()
  const [showModal, setShowModal] = useState(false)

  const isFaved = favs.some(favId => favId === id)

  const handleClick = () => {
    if (!isLogged) setShowModal(true)
    if (!isFaved && isLogged) addFavUser({ id })
  }

  const handleClose = () => setShowModal(false)

  const handleLogin = () => setShowModal(false)

  const [
    label,
    emoji
  ] = isFaved
    ? [
        'Remove Gif from favorites',
        '❌'
      ]
    : [
        'Add Gif to favorites',
        '❤️'
      ]

  return (
    <>
      <button className='gf-Fav' onClick={handleClick}>
        <span aria-label={label} role='image'>
          {emoji}
        </span>
      </button>
      {showModal && <Modal onClose={handleClose}><Login onLogin={handleLogin} /></Modal>}
    </>
  )
}
