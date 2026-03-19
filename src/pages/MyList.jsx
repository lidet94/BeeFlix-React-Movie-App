import { Row } from "../components/Row";
import '../styles/mylist.css'; 

export default function MyList({myList, removeMyList, isInMyList}){


    return (
        <> {myList.length === 0 ? 
        
        <h4 className="empty-list"> No results</h4>
        :
        <Row className='mylist-section'
        title='My List'
        movies={myList}
        removeMyList={removeMyList} 
        isInMyList={isInMyList}
        />
        }
        
        </>
    )
}