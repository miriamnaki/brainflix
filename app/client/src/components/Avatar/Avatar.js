import React from 'react';
import './Avatar.scss'
import avatar from '../../assets/images/Mohan-muruge.jpg';

function Avatar() {
  return (
    <div className="avatar">
      <img className="avatar__image" src={avatar} alt="avatar" />
    </div>
  );
}

export default Avatar;