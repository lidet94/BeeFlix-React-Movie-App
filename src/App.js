import './App.css';
import { useState } from 'react';
import { Hero } from './components/Hero';
import { Modal } from './components/Modal';
import { NavBar } from './components/NavBar';
import { Row } from './components/Row';
import { SearchBar } from './components/SearchBar';
import { MyListContext } from './context/MyListContext';
import Home from './pages/Home'

function App() {
const [search, setSearch] = useState('');

    const handleSearch = (term) =>{
        setSearch(term)
      }


  return (
   <>
   <NavBar />
   <SearchBar onSearch={handleSearch} />
   <Hero />
   <Home />
   <Row/>
   <MyListContext search={search}/>
   <Modal />
   </>
  );
}

export default App;
