import React from 'react';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import commentIcon from '../../assets/icons/add_comment.svg';
import './Form.scss'

function Form({label, placeholder, name}) {
  return (
    <div className="form">
     
      <form class="form__container">
        <div class="form__wrapper"> 
            <div class="form__avatar"> 
            <Avatar
            src ={avatar}
            alt="avatar"
            />
            </div>
          
              
            <div class="form__text-area">
            <label class="form__label" for="description">{label}</label>

              <textarea 
                class="form__description"
                type="text"
                name={name} 
                id={name}
                cols="40" 
                rows="6.5"
                required
                placeholder={placeholder}></textarea>
            </div>
          </div>  

          <div className="form__button">
            <Button
              value='comment'
              icon ={commentIcon}
            />
          </div>  
    </form>
      
    </div>
  );
}

export default Form;