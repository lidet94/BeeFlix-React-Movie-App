import '../styles/navbar.css'
import { SearchBar } from './SearchBar'


export const NavBar = ({ setPage, onSearch }) => {

    
  return (
 <nav className='navbar'>
    
    <div className='navbar-left'>
      <h4 onClick={() => setPage("home")}>BEEFLIX</h4>
</div>

 <div className="navbar-right">
    <SearchBar onSearch={onSearch} />
      <button className='home-btn' onClick={() => setPage("home")}>
        Home
      </button>

      <button className='list-btn' onClick={() => setPage("mylist")}>
        My List
      </button>
  </div>
 </nav>      
  )
}


