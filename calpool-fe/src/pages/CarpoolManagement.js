import React, { useEffect, useState } from 'react'; 
import ProfileDisplay from "../components/ProfileDisplay/ProfileDisplay";
import TitleBar from "../components/TitleBar/TitleBar";
import "./CarpoolManagement.css"; 
import CarpoolCard from "../components/CarpoolCard/CarpoolCard";
import Modal from "../components/Modal/Modal";




function CarpoolManagement () {
    const [modal, setModal] = useState(false);

    useEffect(() => {
        const upcomingClickable = document.getElementById('upcoming-clickable'); 
        const pastClickable = document.getElementById('past-clickable'); 

        upcomingClickable.addEventListener('click', openModal);
        pastClickable.addEventListener('click', openModal);




        return () => {
            upcomingClickable.removeEventListener('click', openModal);
            pastClickable.removeEventListener('click', openModal);

        };

        
    }, []);
    
    const openModal = () => {
        setModal(true);

    };

    const closeModal = () => {
        setModal(false);
    }






    return (
        <div className="CM__organization">
            <ProfileDisplay firstname = "Mohan" instagram = "@mohanxu" lastname = "Xu" email='mohanxu@berkeley.edu' phone='xxx-xxx-xxxx' img="https://static.vecteezy.com/system/resources/previews/009/749/751/original/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg" />

            <TitleBar BarName = "UpComing Trips :"/>
            <div className = "cards" id='upcoming-clickable'>
            <CarpoolCard />
            <CarpoolCard />
            <CarpoolCard />
            
            </div>
            
            <TitleBar BarName = "Past Trips :" />
            <div className = "cards" id='past-clickable'>
            <CarpoolCard />
            <CarpoolCard />
            <CarpoolCard />
            </div>

            {modal &&  <Modal onClose={closeModal}/>}
            
        </div>
    )
}

export default CarpoolManagement; 