import React from 'react';

function Form({title, placeholder, name, src, alt}) {
  return (
    <div>
      <h1>{title}</h1>
      <form class="comments">
        <div class="comments__wrapper"> 
          <div class="comments-form__avatar-wrapper"> 
            <img type="image" name="avatar" class="comments__avatar" src={src} alt={alt}/>
          </div >
        
             
          <div class="comments-form__text-area">
            <textarea 
              class="comments-form__description"
              type="text"
              name={name} 
              id={name}
              cols="40" 
              rows="6.5"
              required
              placeholder={placeholder}></textarea>
          </div>

          <button 
              class="comments-form__button" 
              type="submit"
              value="Comment">
          </button>
        
        </div>     


      <div class="comments-form__button-wrapper">
       
      </div>
    
    </form>
      
    </div>
  );
}

export default Form;