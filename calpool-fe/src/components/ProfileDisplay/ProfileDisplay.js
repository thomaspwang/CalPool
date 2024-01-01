import React from 'react'; 
import "./ProfileDisplay.css"; 

function ProfileDisplay({firstname, lastname, email, phone, img, grade, major, gender}) {


    return (
        <div className = "profile-container section">
            <div className = "contact__container grid">
                <img src={img} alt="" className="home__img avatar" />

                <div className="contact_data">
                    <h1>{firstname} {lastname}</h1>
                    <p>{email} {phone} </p>
                    <p>Year: {grade} <div></div>
                    Major: {major} <div></div>Gender: {gender}</p>
                </div>

            </div>
            
        </div>
    )
}
export default ProfileDisplay; 