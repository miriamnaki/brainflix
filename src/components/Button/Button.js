import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

function Button({value, icon, alt}) {
  return (
    <div className="button">
      <Link to="/video-upload">
        <button className="button__action">{value}</button>
      </Link> 
      <img  className="button__image"  src={icon} alt={alt} />
    </div>
  );
}

export default Button;