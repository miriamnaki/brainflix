import React from 'react';
import './Input.scss';

function Input({icon, placeholder, alt}) {
  return (
    <div className="search">
      <input className="search__input" 
        type="search"
        name="search"
        placeholder={placeholder}
      />
      <img className="search__icon" src={icon} alt={alt} />  
    </div>
  );
}

export default Input;