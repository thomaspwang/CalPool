import * as React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import './RadioButton.css'


export default function RadioButton({ value, label }) {
  return (
      <FormControlLabel value={value} control={<Radio color='secondary' size='small' className="radio-button"/>} label={label}  className="radio"/>
  );
}
