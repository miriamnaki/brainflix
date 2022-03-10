import React from 'react';
import './TextArea.scss';

function TextArea({label, placeholder, name, cols, rows,className, onChange, value}) {
  return (
    <div className="text-area">
      <label className="text-area__label" htmlFor="description">{label}</label>
        <textarea 
          className={className}
          type="text"
          name={name} 
          value={value}
          id={name}
          cols={cols} 
          rows={rows}
          onChange={onChange}      
          placeholder={placeholder}></textarea>
    </div>
  );
}

export default TextArea;