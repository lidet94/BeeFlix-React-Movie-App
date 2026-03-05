import React, { useState } from 'react'
import { SearchBar } from './SearchBar'
/*logo + search bar + maybe MyList button*/
export const NavBar = ({ setPage }) => {

    
    
  return (
 <nav>
    <h4 onClick={() => setPage("home")}>BEEFLIX</h4>

      <button onClick={() => setPage("home")}>
        Home
      </button>

      <button onClick={() => setPage("mylist")}>
        My List
      </button>
 </nav>      
  )
}


