import React, { useEffect, useState } from 'react'; 
import "./Modal.css"; 
import { Button } from "@mui/material";



function Modal ({onClose, creator, puTime, puLoc, eta, dest, participants}) {

    const handleClose = () => {
        onClose();
    }
    useEffect(() => {
        getParticipant();


        return () => {
        };
    }, []);


    const [profileData, setProfileData] = useState({
        first_name: 'initial name',
        last_name: 'initial name',
        email: 'email@berkeley.edu',
        password: 'password123',
        graduation: '2026',
        major: 'Poli Sci',
        gender: 'M',
    });

    


    const getParticipant = async () => {
        const result =  fetch("http://127.0.0.1:8000/get_user_info", {
            method:'POST', 
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({"id": participants[0].$oid })
        }) 
        .then(result => {
            return result.json()
        })
        .then(data => {
            setProfileData(data)
        })
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
                            <p>{creator}</p>
                            {/* <p>{selectedTrip.owner.$ref}</p> */}

                            </div>
                        </div>


                    </div>

                    {participants.length > 0 && (<div className = "riders">
                        <p id='identity'>Sharing this ride : </p>
                        <div className = "pfp-in-modal">
                        {participants.map((participant) => (
                             <div className="pfp-w-name" key={participant.id}>
                             <span className="circle-in-modal"></span>
                             {profileData.first_name !== 'initial name' ? (
            <p>{profileData.first_name} {profileData.last_name}</p>
          ) : (
            <p>Loading...</p>
          )}
                            </div>
))}


                            {/* <div className = "pfp-w-name">
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
                            </div> */}
                        </div>

                    </div>)}

                    

                </div>

                <div className = "info">

                    <div className="date-and-pickup"> 
                            {/* <p>Date: {selectedTrip.start_time}</p> */}
                            <p>Pick-up Time: {puTime}</p>
                            <p>Pick-up Location: {puLoc}</p>

                        
                    </div>
                

                    <div className="drop-off"> 
                            <p>Estaimted Arrival Time: {eta}</p>
                            <p>Drop-off Location: {dest} </p>


                        
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