import React from 'react'
import { useLocation } from 'wouter'
import useUser from '../../hooks/useUser'
import './styles.css'

export default function Fav ({ id }) {
  const { isLogged, addFavUser, favs } = useUser()
  const [, navigate] = useLocation()

  const isFaved = favs.some(favId => favId === id)

  const handleClick = () => {
    if (!isLogged) navigate('/login')
    !isFaved && addFavUser({ id })
  }

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
    </>
  )
}
