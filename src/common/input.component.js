import React from "react";

function Input(props) {
  const { type, className, placeholder, name, value, onChange } = props;
  return (
    <>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        style = {{ width:"700px",height:"50px",padding:"15px",fontSize:"20px",borderRadius:"10px" } }
      />
    </>
  );
}

export default Input;
