import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Book.css'



export const Book = () => {
    const navigate = useNavigate()
    return (
        <div className="book">
            <div className="book__imageContainer">
                <img src="https://cdn.asaha.com/assets/thumbs/32a/32a0bb013d6e731660e2a7ebd7494b4b.jpg" alt="" onClick={()=>(navigate('../../home/books/1'))}/>
            </div>
            <div className="book__info">
                <h4>Book Title: Physics for Engineers</h4>
                <h4>Author: Hansen</h4>
                <h4>Publisher: Oxford Press</h4>
                <p>Description:</p>
            </div> 
        </div>
    )
}
