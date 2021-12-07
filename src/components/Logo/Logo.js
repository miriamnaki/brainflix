import React from 'react';
import './Logo.scss';
import logo from '../../assets/logo/BrainFlix-logo.svg';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/mi">
    <div className="logo">
      <img  className="logo__image"  src={logo} alt="logo" />     
    </div>
    </Link>
  );
}

export default Logo;