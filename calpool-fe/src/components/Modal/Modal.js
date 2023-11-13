import React from 'react';
import "./Modal.css"; 
import { Button } from "@mui/material";



function Modal ({onClose}) {
    const handleClose = () => {
        onClose();
    }
  
    return (
        <div className='modal'>
            <div className="overlay"></div>
            <div className="modal-container">
            <div className = "modal-content">
                <h2>Trip Details : </h2>
                <span className="close-icon" onClick={handleClose}></span>

                <div className="people">
                    <div className = "Creator">
                        <p id='identity'>Creator : </p>
                        <div className = "pfpInModal">
                            <div className = "pfpWName">
                            <span className="circleInModal"></span>
                            <p>Oski Bear</p>

                            </div>
                        </div>


                    </div>

                    <div className = "Riders">
                        <p id='identity'>Sharing this ride : </p>
                        <div className = "pfpInModal">
                            <div className = "pfpWName">
                                <span className="circleInModal"></span>
                                <p>Doski Bear</p>
                            </div>
                            <div className = "pfpWName">
                                <span className="circleInModal"></span>
                                <p>Doski Bearra</p>
                            </div>
                            <div className = "pfpWName">
                                <span className="circleInModal"></span>
                                <p>Loski Berran</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className = "info">

                    <div className="dateAndPickup"> 
                            <p>Date: </p>
                            <p>Pick-up Time:</p>
                            <p>Pick-up Location: </p>

                        
                    </div>
                

                    <div className="drop-off"> 
                            <p>Estaimted Arrival Time: </p>
                            <p>Drop-off Location: </p>


                        
                    </div>

                </div>

                <a id="googleMapLink" href="https://maps.google.com" target="_blank">View Trip On Google Maps </a>



                
                {/* <img src="https://www.figma.com/file/o4oE5rNfNEnhUsOgKr45Tz/CalPool-(WIP!!)?type=design&node-id=116-425&mode=design&t=qdLLgoX4XD4gJ7Oc-4"
                alt="Close Icon"
                onClick={handleClose}></img> */}

                <div className="joinOrLeave">
                    <Button>Invite Others</Button>
                    <Button>Leave Group</Button>
                </div>

                {/* <Button onClick={handleClose}>Close</Button> */}

                
                
            </div>
            </div>


        </div>
    )
}

export default Modal