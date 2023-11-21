import { MenuItem, Select } from "@mui/material";
import "./Dropdown.css";

export default function Dropdown({ options, label, onChange, name, value }) {
  return (
    <div className="dropdown">
      <h1 className="title">{label}</h1>
      <Select
        value={value}
        name={name}
        onChange={onChange}
        variant="outlined"
        classes={{ root: "custom-select-root" }}
      >
        {options.map((option, index) => (
          <MenuItem value={option} key={index} className="menu">
            {option}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
