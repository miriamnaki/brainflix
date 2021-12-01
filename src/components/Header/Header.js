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
      <Logo/>
      <div className="header__input-avatar">
        <Input/>
        <Avatar/>
      </div>
      <Button
        value="upload"
        icon= {uploadIcon}
        alt ='uploadIcon'
        />
      
    </div>
  );
}

export default Header;