import React from "react";

function Button(props) {
  const { type, className, text, style, onClick } = props;
  return (
    <>
      <button type={type} 
      className={className} 
      style={style} 
      onClick={onClick}>
        {text}
      </button>
    </>
  );
}

export default Button;
