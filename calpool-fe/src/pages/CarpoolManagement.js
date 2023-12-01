import React, { useEffect, useState } from 'react'; 
import ProfileDisplay from "../components/ProfileDisplay/ProfileDisplay";
import TitleBar from "../components/TitleBar/TitleBar";
import "./CarpoolManagement.css"; 
import CarpoolCard from "../components/CarpoolCard/CarpoolCard";
import Modal from "../components/Modal/Modal";
import ProfileModal from "../components/ProfileModal"; 
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function CarpoolManagement() {
    const [modal, setModal] = useState(false);
    const [profileModalOpen, setProfileModalOpen] = useState(false); 
    const [profileData, setProfileData] = useState({
        id: "6556d7704c68f1e9a7e9f3f4",
        first: "Danny",
        last: "Sally",
        graduation: '2026',
        gender: 'M',
    });

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    };

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
    };

    const openProfileModal = () => {
        setProfileModalOpen(true);
    };

    const closeProfileModal = () => {
        setProfileModalOpen(false);
    };

    const handleSaveProfileData = async (newData) => {
        setProfileData(newData);
    
        const formattedData = {
            id: newData.id,
            first_name: newData.first, // assuming 'first' is the first name
            last_name: newData.last,   // assuming 'last' is the last name
            gender: newData.gender,
            graduation_year: newData.graduation // assuming 'graduation' is the graduation year
        };
    
        try {
            const backendUrl = process.env.REACT_APP_BACKEND_URL;
            const response = await fetch(backendUrl + "update_profile", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formattedData)
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log(data); 
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };
    

    return (
        <div className="CM__organization">
            <ProfileDisplay firstname="Mohan" instagram="@mohanxu" lastname="Xu" email="mohanxu@berkeley.edu" phone="xxx-xxx-xxxx" img="https://static.vecteezy.com/system/resources/previews/009/749/751/original/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg" />

            <Button
                variant="contained"
                className="new-carpool-btn"
                onClick={navigateToHome}
            >
                Find Carpools
            </Button>

            <Button
                variant="contained"
                className="new-carpool-btn"
                onClick={openProfileModal}
            >
                Edit Profile
            </Button>


            <TitleBar BarName="UpComing Trips :" />
            <div className="cards" id='upcoming-clickable'>
                <CarpoolCard />
                <CarpoolCard />
                <CarpoolCard />
            </div>
            
            <TitleBar BarName="Past Trips :" />
            <div className="cards" id='past-clickable'>
                <CarpoolCard />
                <CarpoolCard />
                <CarpoolCard />
            </div>

            {modal && <Modal onClose={closeModal} />}
            <ProfileModal
                open={profileModalOpen}
                onClose={closeProfileModal}
                onSave={handleSaveProfileData}
                initialData={profileData}
            />
        </div>
    );
}

export default CarpoolManagement;
