import React from "react";
import "./Button.css";

const Button = ({ children, width, height, px, py, bgColor, color, className }) => {
  const style = {
    "--bttn-width": width,
    "--bttn-height": height,
    "--bttn-padding-x": px,
    "--bttn-padding-y": py,
    "--bttn-color": color,
    "--bttn-bg": bgColor
  };

  return <button className={`button-custom ${className}`} style={style}>{children}</button>;
};

export default Button;



