import React, { useEffect, useState } from "react";
import './ViewCarpools.css';
import CarpoolCard from "../../components/CarpoolCard/CarpoolCard"
import SearchBar from "../../components/SearchBar/SearchBar"
import TitleBar from "../../components/TitleBar/TitleBar";

function ViewCarpools() {
    const [results, setResults] = useState([]);

    return (
        <div className = "ViewCarpools">
            <div className = "search-bar-container">
                <SearchBar setResults={setResults}/>
            </div>

            <TitleBar BarName = "Available Trips"/>
            <div>
            <CarpoolCard dest = "SFO" creator="creator" date="10/10/23 - 10/10/23"/>
            <CarpoolCard dest = "SFO" creator="creator" date="10/10/23 - 10/10/23"/>
            <CarpoolCard dest = "SFO" creator="creator" date="10/10/23 - 10/10/23"/>
            <CarpoolCard dest = "SFO" creator="creator" date="10/10/23 - 10/10/23"/>
            <CarpoolCard dest = "SFO" creator="creator" date="10/10/23 - 10/10/23"/>
            </div>
        </div>  
    );
}

export default ViewCarpools;