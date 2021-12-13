import React from 'react';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import TextArea from '../TextArea/TextArea';
import commentIcon from '../../assets/icons/add_comment.svg';
import './Form.scss'

function Form() {

  const handleOnSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="form">  
      <form onSubmit={handleOnSubmit} className="form__container">
        <div className="form__wrapper"> 
        {/* avatar */}
            <div className="form__avatar"> 
              <Avatar/>      
            </div>

              {/* text area */}
            <div className= "form__text-area">
            <TextArea
              cols="40"
              rows="6"
              label="join the converstion"
              placeholder="Add a new comment"
              className="form__description"
            />
            </div>
          </div>  
          {/* Button */}
          <div className="form__button">
            <Button
              value='comment'
              icon ={commentIcon}
              alt='comment icon'
            />
          </div>       
      </form>
      
    </div>
  );
}

export default Form;