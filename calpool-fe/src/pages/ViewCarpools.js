import React from "react";
import './ViewCarpools.css';
import CarpoolCard from "../components/CarpoolCard"

function ViewCarpools() {
    return (
        <div className = "ViewCarpools">
            <header className = "View-header">
                View Carpools
            </header>
            <div>
            <CarpoolCard dest = "SFO" creator="creator" date="10/10/23 - 10/10/23"/>
        </div>
        </div>  
    );
}

export default ViewCarpools;