import React, { useEffect, useState } from 'react'
import getTrendingTerms from '../../services/getTrending'
import Category from '../../components/Category'

export default function TrendingSearches () {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingTerms().then(setTrends)
  }, [])
  return (
    <Category name='Tendencias' options={trends} />
  )
}
