import React from 'react';
import './TextArea.scss';

function TextArea({label, placeholder, name}) {
  return (
    <div className="text-area">
      <label className="text-area__label" htmlFor="description">{label}</label>
        <textarea 
          className="form__description"
          type="text"
          name={name} 
          id={name}
          cols="40" 
          rows="6"
          required
          placeholder={placeholder}></textarea>
    </div>
  );
}

export default TextArea;