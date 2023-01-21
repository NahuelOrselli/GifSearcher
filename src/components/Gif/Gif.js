import React from 'react'
import './styles.css'
import { Link } from 'wouter'
import Fav from '../Fav'

function Gif ({ title, id, url }) {
  return (
    <>
      <div className='Gif'>
        <div className='Gif-buttons'>
          <Fav id={id} />
        </div>
        <Link to={`/gif/${id}`}>
          <picture className='Gif-Pic' key={id}>
            <h3 className='Gif-title'>{title}</h3>
            <h5 className='Gif-title-id'>{id}</h5>
            <img className='Gif-image' alt='no' src={url} />
          </picture>
        </Link>
      </div>
    </>
  )
}

export default React.memo(Gif)
