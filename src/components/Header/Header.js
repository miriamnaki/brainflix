import React from 'react';
import Logo from '../Logo/Logo';
import Input from '../Input/Input';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import uploadIcon from '../../assets/icons/upload.svg';

function Header() {
  return (
    <div className="header">
      <Logo/>
      <Input/>
      <Avatar/>
      <Button
        value="upload"
        icon= {uploadIcon}
        alt ='uploadIcon'
        />
      
    </div>
  );
}

export default Header;