import React from 'react'
import './Profile.css'

export const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__imageContainer">
                <img src="https://p.kindpng.com/picc/s/24-248253_user-profile-default-image-png-clipart-png-download.png" alt="" />
            </div>
            <div className="profile__details">
                <div className="profile__userDetails">
                    <p><strong>Username: </strong>Charlotte</p>
                    <p><strong>School: </strong>Shamakhokho University</p>
                    <p><strong>User Current Status: </strong>Defaulted 12 books</p>
                </div>
                <div className="profile__bookDetails">
                    <h4>Books Borrowed</h4>
                    <p>Book Name: Due Date</p>
                    <p>Book Name: Due Date</p>
                    <p>Book Name: Due Date</p>
                    <h4>Books Defaulted</h4>
                    <p>Book Name: Due Date</p>
                    <p>Book Name: Due Date</p>
                </div>
            </div>
        </div>
    )
}
