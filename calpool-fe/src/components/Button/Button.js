import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

const Button = ({ children, color, onClick, loading, type, disabled  }) => {
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
      disabled={disabled}
    >
      {children}
    </LoadingButton>
  );
};

export default Button;
