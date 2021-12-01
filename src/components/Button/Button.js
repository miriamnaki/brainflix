import React from 'react';
import './Button.scss'

function Button({value, icon, alt}) {
  return (
    <div className="button">
      <button>{value}</button>
      <img  className="button__image" src={icon} alt={alt} />
    </div>
  );
}

export default Button;