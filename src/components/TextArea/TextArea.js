import React from 'react';
import './TextArea.scss';

function TextArea({label, placeholder, name, cols, rows,className}) {
  return (
    <div className="text-area">
      <label className="text-area__label" htmlFor="description">{label}</label>
        <textarea 
          className={className}
          type="text"
          name={name} 
          id={name}
          cols={cols} 
          rows={rows}
          required
          placeholder={placeholder}></textarea>
    </div>
  );
}

export default TextArea;