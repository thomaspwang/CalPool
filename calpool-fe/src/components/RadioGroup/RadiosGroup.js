import { FormControl, FormLabel, RadioGroup } from "@mui/material";
import RadioButton from "./RadioButton";
import "./RadiosGroup.css";

export default function RadiosGroup({ radios, label, onChange, name, value }) {
  return (
    <>
      <h1 className="label">{label}</h1>
      <RadioGroup onChange={onChange} name={name} value={value}>
        <div className="radio-group">
          {radios.map((radio, index) => (
            <RadioButton value={radio} label={radio} key={index} />
          ))}
        </div>
      </RadioGroup>
    </>
  );
}
