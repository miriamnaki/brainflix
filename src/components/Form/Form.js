import React from 'react';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import TextArea from '../TextArea/TextArea';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import commentIcon from '../../assets/icons/add_comment.svg';
import './Form.scss'

function Form() {
  return (
    <div className="form">  
      <form className="form__container">
        <div className="form__wrapper"> 
        {/* avatar */}
            <div className="form__avatar"> 
              <Avatar
                src ={avatar}
              />
            </div>
            <div className= "form__text-area">
            <TextArea
              cols="40"
              rows="6"
              label="join the converstion"
              placeholder="Add a new comment"
              className="form__description"
            />

            </div>
                {/*  text-area*/}
            {/* <div className="form__text-area">
            <label className="form__label" htmlFor="description">{label}</label>
              <textarea 
                className="form__description"
                type="text"
                name={name} 
                id={name}
                cols="40" 
                rows="6"
                required
                placeholder={placeholder}></textarea>
            </div> */}
          </div>  

          <div className="form__button">
            <Button
              value='comment'
              icon ={commentIcon}
              alt='comment-icon'
            />
          </div>  
    </form>
      
    </div>
  );
}

export default Form;