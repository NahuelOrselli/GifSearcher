import React from 'react'
import './styles.css'
import { Link } from 'wouter'

function Gif ({ title, id, url }) {
  return (
    <>
      <Link to={`/gif/${id}`}>
        <picture className='Gif' key={id}>
          <h3 className='Gif-title'>{title}</h3>
          <h5 className='Gif-title-id'>{id}</h5>
          <img className='Gif-image' alt='no' src={url} />
        </picture>
      </Link>
    </>
  )
}

export default React.memo(Gif)
