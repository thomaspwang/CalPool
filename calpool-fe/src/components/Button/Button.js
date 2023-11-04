import React from "react";
import "./Button.css";
import { CircularProgress } from "@mui/material";

const Button = ({
  children,
  width,
  height,
  px,
  py,
  bgColor,
  color,
  className,
  onClick,
  loading,
  loadColor='white'
}) => {
  const style = {
    width: width || "auto", // Set a default width or pass a specific prop
    height: height || "auto", // Set a default height or pass a specific prop
    padding: `${py} ${px}`,
    color: color,
    backgroundColor: bgColor,
  };

  return (
    <button
      className={`button-custom ${className}`}
      style={style}
      onClick={onClick}
    >
      {loading ? <CircularProgress size={24} sx={{ color: loadColor }} /> : children}
    </button>
  );
};

export default Button;



