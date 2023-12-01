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
                <div className = "top" >
                    <span className="close-icon" onClick={handleClose}></span>
                    <h2>Trip Details : </h2>
                </div>

                <div className="people">
                    <div className = "creator">
                        <p id='identity'>Creator : </p>
                        <div className = "pfp-in-modal">
                            <div className = "pfp-w-name">
                            <span className="circle-in-modal"></span>
                            <p>Oski Bear</p>

                            </div>
                        </div>


                    </div>

                    <div className = "riders">
                        <p id='identity'>Sharing this ride : </p>
                        <div className = "pfp-in-modal">
                            <div className = "pfp-w-name">
                                <span className="circle-in-modal"></span>
                                <p>Doski Bear</p>
                            </div>
                            <div className = "pfp-w-name">
                                <span className="circle-in-modal"></span>
                                <p>Doski Bearra</p>
                            </div>
                            <div className = "pfp-w-name">
                                <span className="circle-in-modal"></span>
                                <p>Loski Berran</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className = "info">

                    <div className="date-and-pickup"> 
                            <p>Date: </p>
                            <p>Pick-up Time:</p>
                            <p>Pick-up Location: </p>

                        
                    </div>
                

                    <div className="drop-off"> 
                            <p>Estaimted Arrival Time: </p>
                            <p>Drop-off Location: </p>


                        
                    </div>

                </div>

                <a id="google-map-link" href="https://maps.google.com" target="blank" rel="nonreferrer">View Trip On Google Maps </a>



                

                <div className="join-or-leave">
                    <Button>Invite Others</Button>
                    <Button>Leave Group</Button>
                </div>


                
                
            </div>
            </div>


        </div>
    )
}


export default Modal