import React, { useState } from 'react'
import '../styles/hero.css'
import movies from '../data/movies.json'
import { Modal } from './Modal'


export const Hero = ({ addToMyList, removeMyList, isInMyList}) => {

  const trendingMovies = movies.filter(movie => movie.isTrending === true)

  const [trendingMovie] = useState(trendingMovies[Math.floor(Math.random() * trendingMovies.length)]
  )

  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <div className='hero-section' style={{ backgroundImage: `url(${trendingMovie.poster_image})` }}>

      <h1 className='hero-title'>{trendingMovie.movie_title}</h1>


      <div className='hero-buttons'>
        <button className='play-btn'>Play</button>
        <button className='info-btn' onClick={openModal}>More Info</button>

        {isOpen && (
          <Modal
            isOpen={isOpen}
            movie={trendingMovie}
            onClose={closeModal}
            addToMyList={addToMyList}
            removeMyList={removeMyList}
            isInMyList={isInMyList}
          />
        )}




      </div>

    </div>
  )
}
