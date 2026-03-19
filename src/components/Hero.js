import React, { useState } from 'react'
import '../styles/hero.css'
import movies from '../data/movies.json'

export const Hero = () => {

  const trendingMovies = movies.filter(movie => movie.isTrending === true)
  const [trendingMovie] = useState(trendingMovies[Math.floor(Math.random() * trendingMovies.length)]
  )

  return (
    <div className='hero-section' style={{ backgroundImage: `url(${trendingMovie.poster_image})` }}>

      <h1 className='hero-title'>{trendingMovie.movie_title}</h1>


      <div className='hero-buttons'>
        <button className='play-btn'>Play</button>
        <button className='info-btn'>More Info</button>
      </div>

    </div>
  )
}
