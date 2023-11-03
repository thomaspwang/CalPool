import React from "react";
import "./TextInput.css";

const TextInput = ({
  placeholder,
  className,
  width,
  height,
  px,
  py,
  pr,
  pl,
  color,
  bgColor,
  name,
  onChange,
  value,
  error,
  type
}) => {
  const style = {
    width: width,
    height: height,
    padding: `${py} ${px}`,
    paddingLeft: pl,
    paddingRight: pr,
    color: color,
    backgroundColor: bgColor,
  };

  return (
    <input
      type={type}
      name={name}
      className={`text-input-custom ${className} ${error && 'error'}`}
      spellCheck="false"
      placeholder={placeholder}
      style={style}
      onChange={onChange}
      value={value}
    />
  );
};

export default TextInput;
