import React from 'react'
import { Card } from './Card'
import '../styles/rows.css'

export const Row = ({title, movies}) => {
  const movieList = movies || []

    return (
        <div className='row'>
            <h2 className='row-title'>{title}</h2>

            <div className='row-scroll'>
                {movieList.map(movie=>(
                    <Card key={movie.id} movie={movie} />
                ))}
            </div>
            
        </div>
    )
}


