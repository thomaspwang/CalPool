import React from 'react'; 
import "./ProfileDisplay.css"; 

function ProfileDisplay({firstname, lastname, email, phone, instagram, img}) {


    return (
        <div className = "profile-container section">
            <div className = "contact__container grid">
                <img src={img} alt="" className="home__img avatar" />

                <div className="contact_data">
                    <h1>{firstname} {lastname}</h1>
                    <p>{email} {phone} {instagram}</p>
                    <p>Some description that the user can pass in, such as major or grade</p>
                </div>

            </div>
            
        </div>
    )
}
export default ProfileDisplay; 