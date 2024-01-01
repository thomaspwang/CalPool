import React from "react";
import './CarpoolCard.css';



function CarpoolCard({onClick, creator, date, puTime, puLoc, eta, dest, opened_from_cpManagement}) {
    return (
        <div className = "card" onClick = {opened_from_cpManagement ? onClick : null}>
            <div className="parent">
                <div className = "children" >
                    <span className="circle"></span>
                </div>
                <h4><b className = "creator">{creator}</b></h4>
            </div>
            <div className="vertical-line"></div>
            <div className = "grid-container">
                <p className = "dest"> Destination: {dest} </p> 
                {/* <p className = "date"> Date: {date} </p> */}
                <p className = "details"> PickUp Time: {puTime} </p>
                <p className = "details"> PickUp Location: {puLoc} </p>
                <p className = "details"> Estimated Arrival Time: {eta} </p>
            </div>
        </div>
    );
}

export default CarpoolCard;