import React, { useState } from 'react'
import './AddBook.css'

export const AddBook = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [publisher, setPublisher] = useState("")
    const [isbn, setIsbn] = useState("")
    const [imageLink, setImageLink] = useState("")
    const [year, setYear] = useState("")
    const [category, setCategory] = useState("")
    const [edition, setEdition] = useState("")
    const [pages, setPages] = useState("")

    
    const handleClick = e =>{
        e.preventDefault()
        const form = {
            title: title,
            category: category,
            isbn10: isbn,
            author: author,
            publisher: publisher,
            year: year,
            pages: pages,
            edition: edition,
            imageURL: imageLink,
        }
        console.log(form)
        fetch('/api/books/create',{
            method: 'POST',
            headers:{
                'Content-type': 'application/json',
            },
            body: JSON.stringify(form)
        }).then(response=>{
            if(response.status === 200){
                response.json().then(data=>{
                    alert(data.message)
                    setAuthor("")
                    setCategory("")
                    setEdition("")
                    setTitle("")
                    setPublisher("")
                    setYear("")
                    setImageLink("")
                    setIsbn("")
                    setPages("")
                })
            }
        })
        
    }

    return (
        <div className="addbook">
            <form action="">
                <h4>Title:</h4>
                <input type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
                <h4>Author:</h4>
                <input type="text" value={author} onChange={e=>setAuthor(e.target.value)}/>
                <h4>Book Category:</h4>
                <input type="text" value={category} onChange={e=>setCategory(e.target.value)}/>
                <h4>Publisher:</h4>
                <input type="text" value={publisher} onChange={e=>setPublisher(e.target.value)}/>
                <h4>ISBN Number:</h4>
                <input type="text" value={isbn} onChange={e=>setIsbn(e.target.value)}/>
                <h4>Year:</h4>
                <input type="text" value={year} onChange={e=>setYear(e.target.value)}/>
                <h4>Edition:</h4>
                <input type="text" value={edition} onChange={e=>setEdition(e.target.value)}/>
                <h4>Pages:</h4>
                <input type="text" value={pages} onChange={e=>setPages(e.target.value)}/>
                <h4>Image Link:</h4>
                <input type="text" value={imageLink} onChange={e=>setImageLink(e.target.value)}/>
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    )
}
