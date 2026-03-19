import '../styles/modal.css'

export const Modal = ({isOpen, movie, onClose, addToMyList, removeMyList, isInMyList}) => {


  if (!isOpen || !movie){
    return null
  }

  return (
     <div 
      className="modal-backdrop"
      onClick={onClose}
    >

    <div className='modal-content'>
  <img src={movie.poster_image} alt={movie.movie_title}></img>
      <p>{movie.movie_title}</p>
      <p>{movie.description}</p>
      <p><span style={{fontWeight:'bold'}} >Released:</span> {movie.release_date}</p>
      <p><span style={{fontWeight:'bold'}}>Duration:</span> {movie.duration_minutes}</p>
      <p><span style={{fontWeight:'bold'}}>Rating:</span> {movie.rating}</p>
      <p><span style={{fontWeight:'bold'}}>Genre:</span> {movie.category}</p>

      {(!isInMyList(movie.id)) ? (
        <button onClick={()=> addToMyList(movie)}>Add to List</button>
      ) : 
        <button onClick={()=> removeMyList(movie.id)}>Remove from List</button>
      }

      <button onClick={onClose}>Close</button>
    </div>

    </div>
  )

}


