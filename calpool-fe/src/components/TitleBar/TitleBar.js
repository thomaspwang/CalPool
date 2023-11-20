import React from 'react'; 
import "./TitleBar.css"; 
import FilterButton from "./FilterButton";


function TitleBar({BarName}) {
    return (
        <div className = "titlebar-container">
            <div className = "texts">
            

                <div className="left">
                    <h1>{BarName}</h1>
                    
                </div>
                <FilterButton />
                

            </div>
                <hr></hr>
        </div>
        

        
    )
}

export default TitleBar;