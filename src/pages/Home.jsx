/*hero + rows*/
import { organiseByCategory } from "../utils/organiseByCategory"
import  movies from '../data/movies.json'
import { Row } from "../components/Row"


export default function Home() {

  const grouped = organiseByCategory(movies)

  return (
    <div className="home">
      {Object.keys(grouped).map(category=>(
        <Row 
        key={category}
        title={category}
        movies={grouped[category]}
        
        />
        
      ))}
    </div>
  )
}
