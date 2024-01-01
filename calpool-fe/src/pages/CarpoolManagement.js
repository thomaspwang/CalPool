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
    const [selectedTrip, setSelectedTrip] = useState(null);

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
        // const upcomingClickable = document.getElementById('upcoming-clickable'); 
        // const pastClickable = document.getElementById('past-clickable'); 
        getUser();
        getUpComing();
        getPast();

        // upcomingClickable.addEventListener('click', openModal); 
        // pastClickable.addEventListener('click', openModal);

        return () => {
            // upcomingClickable.removeEventListener('click', openModal);
            // pastClickable.removeEventListener('click', openModal);
        };
    }, []);
    
    const openModal = (trip) => {
        setSelectedTrip(trip); 
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
        try {
            const response = await fetch("http://127.0.0.1:8000/get_user_info", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "id": "6556d7704c68f1e9a7e9f3f4" })
            });
    
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
    
            const data = await response.json();
            setProfileData(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    


    const getUpComing = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/retrieve_upcoming", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "id": "655be59f47dfea0dc232cfe0" })
            });
    
            if (!response.ok) {
                throw new Error('Failed to fetch upcoming trips');
            }
    
            const data = await response.json();
            setupcomingTrips(data);
        } catch (error) {
            console.error('Error fetching upcoming trips:', error);
        }
    };
    

    const getPast = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/retrieve_past", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "id": "655be59f47dfea0dc232cfe0" })
            });
    
            if (!response.ok) {
                throw new Error('Failed to fetch past trips');
            }
    
            const data = await response.json();
            setpastTrips(data);
        } catch (error) {
            console.error('Error fetching past trips:', error);
        }
    };
    



    // const getUpcoming = async () => {
    //     const result = await fetch('')
    // }

    return (
        <div className="CM__organization">
            <div className="profile_section">
            <ProfileDisplay major={profileData.major} 
            grade={profileData.graduation_year} gender ={profileData.gender}
            firstname={profileData.first_name} lastname={profileData.last_name} 
            email={profileData.email} phone={profileData.phone_number}img="https://static.vecteezy.com/system/resources/previews/009/749/751/original/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg" />
            <button onClick={openProfileModal}>Edit Profile</button>
            </div>
            <TitleBar BarName="UpComing Trips :" />
            <div className="cards" id='upcoming-clickable'>
            {upComingTrips.map((trip) => {
            return <CarpoolCard 
            onClick={() => openModal(trip)}
            key={trip.id}
            opened_from_cpManagement={true}
            creator={trip.owner.$ref} puTime={trip.start_time.$date}
             puLoc={trip.start_location} eta={trip.end_time.$date} 
             dest={trip.end_location}/>
            })}
            
            </div>
            
            <TitleBar BarName="Past Trips :" />
            <div className="cards" id='past-clickable'>
            {pastTrips.map((trip) =>  {
                console.log(trip)
            return <CarpoolCard onClick={() => openModal(trip)} key={trip.id} opened_from_cpManagement={true}
            creator={trip.owner.$ref} 
            puTime={trip.start_time.$date} puLoc={trip.start_location} 
            eta={trip.end_time.$date} dest={trip.end_location}/>
            })}

            </div>

            {modal && <Modal onClose={closeModal} creator={selectedTrip.owner.$ref} puTime={selectedTrip.start_time.$date} puLoc={selectedTrip.start_location} 
            eta={selectedTrip.end_time.$date} dest={selectedTrip.end_location} participants={selectedTrip.participants} />}
            <ProfileModal
                open={profileModalOpen}
                onClose={closeProfileModal}ß
                onSave={handleSaveProfileData}
                initialData={profileData}
            />
        </div>
    );
}

export default CarpoolManagement;
