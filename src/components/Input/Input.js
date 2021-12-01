import React from 'react';
import searchIcon from '../../assets/icons/search.svg';

function Input() {
  return (
    <div>
      <input class="search" 
        type="search"
        name="search"
        placeholder="Search"
      />
      <img className="search__icon" src={searchIcon} alt="searchIcon" />
      
    </div>
  );
}

export default Input;