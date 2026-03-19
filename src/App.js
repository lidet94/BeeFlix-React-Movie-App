import './App.css';
import { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { NavBar } from './components/NavBar';
import Home from './pages/Home'
import MyList from './pages/MyList';

function App() {

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const [search, setSearch] = useState('');
  const [myList, setMyList] = useState([]);
  const [page, setPage] = useState("home");

  const handleSearch = (term) => {
    setSearch(term)
  }

  function addToMyList(movie) {
    setMyList((prev) => [...prev, movie])
  }

  function removeMyList(id) {
    setMyList((prev) => prev.filter(item => item.id !== id))
  }

  function isInMyList(id) {
    return myList.some(item => item.id === id)
  }

  return (
    <>
      <NavBar setPage={setPage} onSearch={handleSearch} />

      {page === "home" && (
        <>

          <Hero />
          <Home
            search={search}
            addToMyList={addToMyList}
            removeMyList={removeMyList}
            isInMyList={isInMyList} />
        </>)}

      {page === "mylist" && (
        <MyList
          myList={myList}
          addToMyList={addToMyList}
          removeMyList={removeMyList}
          isInMyList={isInMyList}
        />)}
    </>
  );
}

export default App;
