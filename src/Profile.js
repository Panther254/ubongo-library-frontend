import React, { useEffect, useState } from 'react'
import './Profile.css'

export const Profile = () => {
    const [profile, setProfile] = useState({})
    const [booksBorrowed, setbooksBorrowed] = useState([])
    
    useEffect(() => {
       fetch('/api/auth/profile')
       .then(response=>response.json())
       .then(data=>{
            setProfile(data)
       })
    }, [])

    useEffect(() => {
        fetch('/api/books/borrowed/user/all')
       .then(response=>response.json())
       .then(data=>{
            setbooksBorrowed(data.borrowedBooks)
       })
    }, [])

    return (
        <div className="profile">
            <div className="profile__imageContainer">
                <img src="https://p.kindpng.com/picc/s/24-248253_user-profile-default-image-png-clipart-png-download.png" alt="" />
            </div>
            <div className="profile__details">
                <div className="profile__userDetails">
                    <p><strong>First Name: </strong>{profile.firstName}</p>
                    <p><strong>Second Name: </strong>{profile.lastName}</p>
                    <p><strong>User Current Status: </strong>Defaulted 12 books</p>
                </div>
                <div className="profile__bookDetails">
                    <h4>Books Borrowed {`(${booksBorrowed.length})`}</h4>
                    {booksBorrowed.map(book=>(<p key={book._id}>{book._id}</p>))}
                    <h4>Books Defaulted</h4>
                    <p>Book Name: Due Date</p>
                    <p>Book Name: Due Date</p>
                </div>
            </div>
        </div>
    )
}
