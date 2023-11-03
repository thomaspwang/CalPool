import React from "react";
import Button from "@mui/material/Button";
import "./Bttn.css";

const Bttn = ({ children, w, h, px, py, bg, color }) => {
  const style = {
    "--bttn-width": w,
    "--bttn-height": h,
    "--bttn-padding-x": px,
    "--bttn-padding-y": py,
    "--bttn-color": color,
    "--bttn-bg": bg
  };

  return <button class="bttn-custom" style={style}>{children}</button>;
};

export default Bttn;
