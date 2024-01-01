import React from 'react';
import "./SingleDigitInput.css";

const SingleDigitInput = React.forwardRef(({
  value,
  handleKeyDown,
  handlePaste,
  index,
  loading,
  wrong
}, ref) => {
  return (
    <input
      key={index}
      name={index.toString()}
      value={value}
      onKeyDown={handleKeyDown}
      className={`input-box ${wrong && 'wrong'}`}
      onPaste={handlePaste}
      ref={ref}
      spellCheck="false"
      autoComplete="off"
      onFocus={(event) => event.target.select()}
      autoFocus={index === 0}
      readOnly={loading}
      onChange={() => {}}
    />
  );
});

export default SingleDigitInput;
