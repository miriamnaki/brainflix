import React from 'react';
import logo from '../../assets/logo/BrainFlix-logo.svg';

function Logo() {
  return (
    <div className="logo">
      <img  className="logo__image"  src={logo} alt="logo" />     
    </div>
  );
}

export default Logo;