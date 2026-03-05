import { Row } from "../components/Row";

export default function MyList({myList, removeMyList, isInMyList, addToMyList}){


    return (
        <>
        <Row 
        title='My List'
        movies={myList}
        addToMyList={addToMyList} 
        removeMyList={removeMyList} 
        isInMyList={isInMyList}
        />
        </>
    )
}