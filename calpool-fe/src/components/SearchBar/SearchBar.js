import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";
import "./SearchBar.css";

function SearchBar({setResults}) {
    const [input, setInput] = useState("");

    const handleChange = (value) => {
        setInput(value);
    }

    return (
        <div className = "input-wrapper">
            <FaSearch id = "search-icon" />
            <input placeholder="search..." 
            value = {input} 
            onChange={(e) => handleChange(e.target.value)}/>
        </div>
    );
};

export default SearchBar;