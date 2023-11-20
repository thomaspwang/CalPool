import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

const Button = ({ children, color, onClick, loading, type }) => {
  return (
    <LoadingButton
      type={type}
      color={color}
      onClick={onClick}
      loading={loading}
      variant="contained"
      className="LoadingButton"
      sx= {{ fontWeight: '600'}}
      disableRipple
    >
      {children}
    </LoadingButton>
  );
};

export default Button;
