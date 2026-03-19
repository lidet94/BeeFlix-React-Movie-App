/*hero + rows*/
import { organiseByCategory } from "../utils/organiseByCategory"
import movies from '../data/movies.json'
import { Row } from "../components/Row"


export default function Home({ search, addToMyList, removeMyList, isInMyList }) {

  const grouped = organiseByCategory(movies)

  const filteredMovies = movies.filter(movie =>
    movie.movie_title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="home">
      {search ? (

        <Row
          title="Search Results"
          movies={filteredMovies}
          addToMyList={addToMyList}
          removeMyList={removeMyList}
          isInMyList={isInMyList}
        />

      ) : (

        Object.keys(grouped).map(category => (
          <Row
            key={category}
            title={category}
            movies={grouped[category]}
            addToMyList={addToMyList}
            removeMyList={removeMyList}
            isInMyList={isInMyList}
          />

        )))}




    </div>
  )
}
