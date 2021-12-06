import React from 'react';
import './Input.scss';
import searchIcon from '../../assets/icons/search.svg';

function Input() {
  return (
    <div className="search">
      <input className="search__input" 
        type="search"
        name="search"
        placeholder="Search"
      />
      <img className="search__icon" src={searchIcon} alt="searchIcon" />  
    </div>
  );
}

export default Input;