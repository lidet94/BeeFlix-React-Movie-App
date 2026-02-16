import React from 'react'
import { Card } from './Card'
import '../styles/rows.css'
/*horizontal scrolling of movies*/
export const Row = ({title, movies}) => {
  const movieList = movies || []

    return (
        <div className='row'>
            <h2 className='row-title'>{title}</h2>

            <div className='row-scroll'>
                {movieList.map(movie=>(
                    <div key={movie.id} className='movie-card'>
                        <img src={movie.image_url} alt= {movie.title}></img>
                        <p>{movie.title}</p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}


