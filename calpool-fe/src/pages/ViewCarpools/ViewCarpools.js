import React, { useEffect, useState } from "react";
import './ViewCarpools.css';
import CarpoolCard from "../../components/CarpoolCard/CarpoolCard"
import SearchBar from "../../components/SearchBar/SearchBar"
import TitleBar from "../../components/TitleBar/TitleBar";

function ViewCarpools() {
    const [carpools, setCarpools] = useState({});
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5001/get_all_calpools', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCarpools(data);
        })
        .catch(error => {
            console.log('Error: ', error);
        }); 
    }, []);



    return (
        <div className = "ViewCarpools">
            <div className = "search-bar-container">
                <SearchBar setResults={setResults}/>
            </div>
            <TitleBar BarName = "Available Trips"/>
            <div>
            {Object.entries(carpools).map(([name, carpool]) =>
        <CarpoolCard 
        dest={carpool.end_location} 
        creator={name} 
        date={(new Date(carpool.start_time.$date)).toLocaleString().split(",")[0]} 
        puTime ={(new Date(carpool.start_time.$date)).toLocaleString().split(",")[1]} 
        puLoc = {carpool.start_location}
        eta = {(new Date(carpool.end_time.$date)).toLocaleString().split(",")[1]}
        />
    )}
            </div>
        </div>  
    );
}

export default ViewCarpools;