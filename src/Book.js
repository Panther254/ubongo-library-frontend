import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Book.css'



export const Book = ({ id, title, author, imageURL }) => {
    const navigate = useNavigate()
    const [roles, setRoles] = useState([])

    useEffect(() => {
        fetch('/api/auth/profile')
        .then(response=>response.json())
        .then(data=>{
            const {roles}= data
             setRoles(roles)
        })
     }, [])
   
    const isAdmin = roles.some(role=>role.name==="admin")

    return (
        <div className="book">
            <div className="book__imageContainer">
                <img src={imageURL} alt="" onClick={()=>(!isAdmin? navigate(`../../home/books/${id}`):false)}/>
            </div>
            <div className="book__info">
                <h4>Book Title: {title}</h4>
                <h4>Author: {author}</h4>
            </div> 
        </div>
    )
}
