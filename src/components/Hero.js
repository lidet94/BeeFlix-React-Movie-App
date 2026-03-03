import React from 'react'
import '../styles/hero.css'
import movies from '../data/movies.json'

export const Hero = () => {

  const trendingMovies = movies.filter(movie => movie.isTrending === true)
  const trendingMovie = trendingMovies[Math.floor(Math.random() * trendingMovies.length)]


  return (
    <div className='hero-section'>
      <div className='hero-image'
      style={
        {background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
          url(${trendingMovie.poster_image})`
}
      }> 
        </div>

      <div className='hero-buttons'>
        <button>Play</button>
        <button>More Info</button>
      </div>

    </div>
  )
}
