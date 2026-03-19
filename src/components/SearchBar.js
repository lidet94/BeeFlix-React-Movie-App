import React from 'react'
import '../styles/searchbar.css'
/*input field*/
export const SearchBar = ({onSearch}) => {
  return (
    <div>
      <input
      type='text'
      placeholder='Title'
      onChange={(e)=>{onSearch(e.target.value)}}></input>
    </div>
  )
}


