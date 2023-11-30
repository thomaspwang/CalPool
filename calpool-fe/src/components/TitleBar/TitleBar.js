import React from "react";
import "./TitleBar.css";
import FilterButton from "./FilterButton";
import Dropdown from "../Dropdown/Dropdown";

function TitleBar({ BarName, filter, setFilter }) {
    const filterOptions = ["Most Recent", "Price: Low to High", "Price: High to Low"]
  return (
    <div className="titlebar-container">
      <div className="texts">
        <div className="left">
          <h1>{BarName}</h1>
        </div>
        <Dropdown options={filterOptions} value={filter} onChange={(event) => setFilter(event.target.value)} transparent={true}/>
      </div>
      <hr></hr>
    </div>
  );
}

export default TitleBar;
