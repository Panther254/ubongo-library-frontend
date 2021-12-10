import React, { useEffect, useState } from 'react'
import './Profile.css'

export const Profile = () => {
    const [profile, setProfile] = useState({})
    const [booksBorrowed, setbooksBorrowed] = useState([])
    const [defaultedBooks, setDefaultedBooks]= useState([])
    const [roles, setRoles]= useState([])
    
    useEffect(() => {
       fetch('/api/auth/profile')
       .then(response=>response.json())
       .then(data=>{
            setProfile(data)
            setRoles(data.roles)
       })
    }, [])

    useEffect(() => {
        fetch('/api/books/borrowed/user/all')
       .then(response=>response.json())
       .then(data=>{
            const { borrowedBooks } = data
            setbooksBorrowed(borrowedBooks)
       })
    }, [])

    useEffect(() => {
        fetch('/api/books/defaulted/user')
       .then(response=>response.json())
       .then(data=>{
        // console.log("defaultedBooks",data)
            setDefaultedBooks(data.defaultedBooks)
       })
    }, [])
    
    const isAdmin = roles.some(role=>role.name==="admin")
    
    const payment =(e)=>{
        const bookId = e.target.dataset.id
        const amount = prompt("Please Enter The Amount To Pay")
        if(!amount){
            alert("Enter Amount")
        }else if(isNaN(amount)){
            alert("Enter Valid Amount")
        }else{
            fetch('api/payments/book-default',{
            method: 'POST',
            headers:{
                'Content-type': 'application/json',
            },
            body: JSON.stringify({book: bookId, amount: amount})
            }).then(response=>response.json()).then(data=>{
                console.log("payment data",data)
            })
        }
    }

    return (
        <div className="profile">
            <div className="profile__imageContainer">
                <img src="https://p.kindpng.com/picc/s/24-248253_user-profile-default-image-png-clipart-png-download.png" alt="" />
            </div>
            <div className="profile__details">
                <div className="profile__userDetails">
                    <p><strong>First Name: </strong>{profile.firstName}</p>
                    <p><strong>Second Name: </strong>{profile.lastName}</p>
                </div>
                <div className="profile__bookDetails">
                    <h4>Books Borrowed: {`(${booksBorrowed.length})`}</h4>
                    {booksBorrowed.length >0 ? booksBorrowed.map(book=>(<div key={book._id}><hr/><p><strong>{book.book.title}</strong><br/><strong>Borrow Date: </strong>{book.borrowDate}<br/><strong>Return Date: </strong>{book.returnDate}<br/></p><hr/></div>)): false}
                    <h4>Books Defaulted {`(${defaultedBooks.length})`}</h4>
                    {defaultedBooks.length>0? false : false}
                </div>
            </div>
        </div>
    )
}
