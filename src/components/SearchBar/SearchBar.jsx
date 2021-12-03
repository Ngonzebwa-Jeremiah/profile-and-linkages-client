import React from 'react'
import searchBarCss from "./SearchBar.module.css";

function SearchBar(props) {
    return (
        <div className={searchBarCss.SearchBar}>
            <input type="text" placeholder={props.placeholder}/>  <button onClick={props.onClick}>Search</button>
          </div>
    )
}

export default SearchBar
