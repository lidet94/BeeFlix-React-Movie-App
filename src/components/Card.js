import React, { useState } from 'react'
import { Modal } from './Modal'

export const Card = ({movie, addToMyList, removeMyList, isInMyList}) => {

  const [isOpen, setIsOpen] = useState(false)

function openModal() {
  setIsOpen(true);
}

function closeModal() {
  setIsOpen(false);
}

  return (
    <>
   
      <div
      className='movie-card'
      onClick={openModal}
      >
        <img src={movie.poster_image} alt={movie.movie_title}></img>
        <p>{movie.movie_title}</p>
      </div>
    <div>  
<Modal
isOpen={isOpen}
movie={movie}
onClose={closeModal}
addToMyList={addToMyList} 
removeMyList={removeMyList} 
isInMyList={isInMyList}
/>
    </div>
  </>
  )

}

