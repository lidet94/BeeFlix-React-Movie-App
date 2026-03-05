import './App.css';
import { useState } from 'react';
import { Hero } from './components/Hero';
import { NavBar } from './components/NavBar';
import { Row } from './components/Row';
import { SearchBar } from './components/SearchBar';
import Home from './pages/Home'
import movies from '../src/data/movies.json'
import MyList from './pages/MyList';

function App() {
const [search, setSearch] = useState('');
const [myList, setMyList] = useState([]);
const [page, setPage] = useState("home");

    const handleSearch = (term) =>{
        setSearch(term)
      }

function addToMyList(movie){
setMyList((prev)=>[...prev, movie])
}

function removeMyList(id){
setMyList((prev)=> prev.filter(item => item.id !== id))
}

function isInMyList (id){
  return myList.some(item => item.id === id)
}

  return (
   <>
   <NavBar  setPage={setPage}/>
   
    {page === "home" && (
      <>
   <SearchBar onSearch={handleSearch} />
   <Hero />
   <Home 
   search={search}
   addToMyList={addToMyList} 
        removeMyList={removeMyList} 
        isInMyList={isInMyList}/>
          </>)}
  
   {page === "mylist" && (
   <MyList 
   movies={myList}
        addToMyList={addToMyList} 
        removeMyList={removeMyList} 
        isInMyList={isInMyList}
   />)}
  
   <Row movies={movies}
   addToMyList={addToMyList} 
        removeMyList={removeMyList} 
        isInMyList={isInMyList}/>
   
   </>
  );
}

export default App;
