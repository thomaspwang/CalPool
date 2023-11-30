import React, { useEffect, useState } from 'react'; 
import ProfileDisplay from "../components/ProfileDisplay/ProfileDisplay";
import TitleBar from "../components/TitleBar/TitleBar";
import "./CarpoolManagement.css"; 
import CarpoolCard from "../components/CarpoolCard/CarpoolCard";
import Modal from "../components/Modal/Modal";
import ProfileModal from "../components/ProfileModal"; 

function CarpoolManagement() {
    const [modal, setModal] = useState(false);
    const [profileModalOpen, setProfileModalOpen] = useState(false); 
    const [upComingTrips, setupcomingTrips] = useState([]);
    const [pastTrips, setpastTrips] = useState([]);

    const [profileData, setProfileData] = useState({
        first_name: 'initial name',
        last_name: 'initial name',
        email: 'email@berkeley.edu',
        password: 'password123',
        graduation: '2026',
        major: 'Poli Sci',
        gender: 'M',
    });

    useEffect(() => {
        const upcomingClickable = document.getElementById('upcoming-clickable'); 
        const pastClickable = document.getElementById('past-clickable'); 
        getUser();
        getUpComing();
        getPast();

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

    const handleSaveProfileData = (newData) => {
        setProfileData(newData);
        
    };

    const getUser = async () => {
        const result =  fetch("http://127.0.0.1:8000/get_user_info", {
            method:'POST', 
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({"id": "6556d7704c68f1e9a7e9f3f4" })
        }) 
        .then(result => {
            return result.json()
        })
        .then(data => {
            setProfileData(data)
        })
    }

    const getUpComing = async() => {
        const result =  fetch("http://127.0.0.1:8000/retrieve_upcoming", {
            method:'POST', 
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({"id": "655be59f47dfea0dc232cfe0" })
        }) 
        .then(result => {
            return result.json()
        })
        .then(data => {
            setupcomingTrips(data);
        })
    }

    const getPast = async() => {
        const result =  fetch("http://127.0.0.1:8000/retrieve_past", {
            method:'POST', 
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({"id": "655be59f47dfea0dc232cfe0" })
        }) 
        .then(result => {
            return result.json()
        })
        .then(data => {
            setpastTrips(data);
        })
    }

    // const getUpcoming = async () => {
    //     const result = await fetch('')
    // }

    return (
        <div className="CM__organization">
            <ProfileDisplay firstname={profileData.first_name} lastname={profileData.last_name} email={profileData.email} phone="xxx-xxx-xxxx" img="https://static.vecteezy.com/system/resources/previews/009/749/751/original/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg" />

            {}
            <button onClick={openProfileModal}>Edit Profile</button>

            <TitleBar BarName="UpComing Trips :" />
            <div className="cards" id='upcoming-clickable'>
            {upComingTrips.map((trip) => <CarpoolCard creator={trip.owner} puTime={trip.start_time} puLoc={trip.start_location} eta={trip.end_time} dest={trip.end_location}/>)}
            
            </div>
            
            <TitleBar BarName="Past Trips :" />
            <div className="cards" id='past-clickable'>
            {pastTrips.map((trip) => <CarpoolCard creator={trip.owner} puTime={trip.start_time} puLoc={trip.start_location} eta={trip.end_time} dest={trip.end_location}/>)}

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
