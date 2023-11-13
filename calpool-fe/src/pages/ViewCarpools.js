import React, { useState } from "react";
import './ViewCarpools.css';
import CarpoolCard from "../components/CarpoolCard";
import ProfileModal from "../components/ProfileModal"; 
import Button from '@mui/material/Button'; 

function ViewCarpools() {
    const [modalOpen, setModalOpen] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'initial name',
        email: 'email@berkeley.edu',
        password: 'password123',
        graduation: '2026',
        major: 'Poli Sci',
        gender: 'M',
    });

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleSaveProfileData = (newData) => {
        setProfileData(newData);
        
    };

    return (
        <div className="ViewCarpools">
            <header className="View-header">
                View Carpools
            </header>
            <div>
                <CarpoolCard dest="SFO" creator="creator" date="10/10/23 - 10/10/23" />
                {}
                <Button variant="outlined" onClick={handleOpenModal}>
                    Edit Profile
                </Button>
            </div>
            {}
            <ProfileModal
                open={modalOpen}
                onClose={handleCloseModal}
                onSave={handleSaveProfileData}
                initialData={profileData}
            />
        </div>
    );
}

export default ViewCarpools;
