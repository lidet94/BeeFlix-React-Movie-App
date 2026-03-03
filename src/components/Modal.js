import '../styles/modal.css'

export const Modal = ({isOpen, movie, onClose}) => {

  if (!isOpen || !movie){
    return null
  }

  return (
     <div 
      className="modal-backdrop"
      onClick={onClose}
    >

    <div className='modal-content'>
  <img src={movie.poster_image} alt='placeholder-img'></img>
      <p>{movie.movie_title}</p>
      <p>{movie.description}</p>
      <p>{movie.release_date}</p>
      <p>{movie.duration_minutes}</p>
      <p>{movie.rating}</p>
      <p>{movie.category}</p>
      <button>Add to List</button>

      <button onClick={onClose}>Close</button>
    </div>
    </div>
  )
}


