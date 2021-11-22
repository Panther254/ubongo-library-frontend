import React, { useState } from 'react'
import './AddBook.css'

export const AddBook = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [publisher, setPublisher] = useState("")
    const [isbn, setIsbn] = useState("")
    const [copies, setCopies] = useState("")
    
    const handleClick = e =>{
        e.preventDefault();
        
    }


    return (
        <div className="addbook">
            <form action="">
                <h4>Title:</h4>
                <input type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
                <h4>Author:</h4>
                <input type="text" value={author} onChange={e=>setAuthor(e.target.value)}/>
                <h4>Publisher:</h4>
                <input type="text" value={publisher} onChange={e=>setPublisher(e.target.value)}/>
                <h4>ISBN Number:</h4>
                <input type="text" value={isbn} onChange={e=>setIsbn(e.target.value)}/>
                <h4>Copies Added:</h4>
                <input type="text" value={copies} onChange={e=>setCopies(e.target.value)}/>
                
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    )
}
