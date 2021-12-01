import React from 'react';
import Logo from '../Logo/Logo';
import Input from '../Input/Input';
import Avatar from '../Avatar/Avatar';

function Header() {
  return (
    <div className="header">
      <Logo/>
      <Input/>
      <Avatar/>
    </div>
  );
}

export default Header;