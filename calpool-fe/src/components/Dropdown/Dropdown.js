import { MenuItem, Select } from "@mui/material";
import "./Dropdown.css";

export default function Dropdown({ options, label, onChange, name, value, width, transparent }) {
  return (
    <div className="dropdown">
      <h1 className="title">{label}</h1>
      <Select
        value={value}
        name={name}
        onChange={onChange}
        variant="outlined"
        classes={{ root: transparent ? "custom-select-root-transparent" : "custom-select-root" }}
        sx={{width: width}}
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
