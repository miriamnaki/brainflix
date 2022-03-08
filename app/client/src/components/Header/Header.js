import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Logo from '../Logo/Logo';
import Input from '../Input/Input';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import uploadIcon from '../../assets/icons/upload.svg';
import searchIcon from '../../assets/icons/search.svg';

function Header() {
  return (
    <div className="header">     
      {/* Logo component */}
        <div className="header__logo">
          <Logo/>
        </div>

        <div className="header__input-avatar-container">
        {/* Input component */}
          <div className="header__input">
            <Input 
            icon ={searchIcon}
            placeholder="Search"
            alt="search icon"
            />
          </div>

          {/* Avatar component */}
          <div className="header__avatar">
            <Avatar/>
          </div>
        </div>

        {/* Button component */}
        <Link to="/video-upload">
          <div className="header__button">
            <Button
              value="upload"
              icon= {uploadIcon}
              alt ='upload icon'
            />
          </div>
        </Link>

        {/* tablet and desktop Avatar component */}
        <div className="header__avatar-tablet">
          <Avatar/>
        </div>  
    </div>
  );
}

export default Header;