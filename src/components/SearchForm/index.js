import React from 'react'
import { useLocation } from 'wouter'
import useForm from './hook'
import './SearchForm.css'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm ({ initialKeyword = '', initialRating = 'g' }) {
  const { keyword, rating, updateKeyword, updateRating } = useForm({ initialKeyword, initialRating })
  const [path, pushLocation] = useLocation()

  const handleSubmit = evt => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleChange = evt => {
    updateKeyword(evt.target.value)
  }

  const handleChangeRating = evt => {
    updateRating(evt.target.value)
  }

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input
        placeholder='Search Gifs...'
        onChange={handleChange}
        type='text'
        value={keyword}
      />
      <button className='btn'>Search</button>
      <select onChange={handleChangeRating} value={rating}>
        {RATINGS.map((option) => (
          <option key={option}>
            {option}
          </option>
        ))}
      </select>
    </form>
  )
}

export default React.memo(SearchForm)
