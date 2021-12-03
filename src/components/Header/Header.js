import React from 'react';
import './Header.scss';
import Logo from '../Logo/Logo';
import Input from '../Input/Input';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import uploadIcon from '../../assets/icons/upload.svg';

function Header() {
  return (
    <div className="header">


        <div className="header__logo">
          <Logo/>
        </div>
  

        <div className="header__input-avatar-container">
        <div className="header__input">
          <Input />
        </div>

        <div className="header__avatar">
          <Avatar/>
        </div>

        </div>

        
       

        <div className="header__button">
        <Button
          value="upload"
          icon= {uploadIcon}
          alt ='uploadIcon'
          />
        </div>
      
        <div className="header__avatar-tablet">
          <Avatar/>
        </div>
         

      
      
      
    </div>
  );
}

export default Header;