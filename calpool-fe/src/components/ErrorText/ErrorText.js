import React from "react";
import './ErrorText.css'

const ErrorText = ({ error }) => {
  return <h1 className="error-label">{error}</h1>;
};

export default ErrorText;
