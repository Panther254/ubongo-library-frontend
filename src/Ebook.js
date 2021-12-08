import React,{ useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Ebook.css'

export const Ebook = ({ physical, bookID}) => {
    const [pickDate, setpickDate] = useState(new Date());
    const [book, setBook] = useState({})
    const [buttonClicked, setbuttonClicked] = useState(false);
    const handleClick = ()=>(setbuttonClicked(!buttonClicked))

    useEffect(() => {
        fetch(`/api/books/book?id=${bookID}`)
        .then(response=>response.json())
        .then(data=>setBook(data))
        
    }, [bookID])

    const borrow= () =>{
        console.log(book._id)
        fetch('/api/books/borrow',{
            method: 'POST',
            headers:{
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ book:book._id })
        }).then(response=>response.json())
        .then(data=>{
            alert(`Request Granted!. Book ID ${data.book}`)
            
        })
    }
    
    return (
        <div className="ebook">
            <div className="ebook__imageContainer">
                <img src={book.imageURL} alt="" />
            </div>
            <div className="ebook__info">
                <h4>Title: {book.title}</h4>
                <h4>Author: {book.author}</h4>
                <h4>Publisher: {book.publisher}</h4>
                <h4>ISBN Number: {book.isbn10}</h4>
                <h4>Category: {book.category}</h4>
                <h4>Pages: {book.pages}</h4>
                <h4>Edition: {book.edition}</h4>
                <h4>Year: {book.year}</h4>

                {physical?<button onClick={handleClick}>Schedule Pickup Date</button>:<button>Download</button>}
                {buttonClicked?<div className="datepicker__visible">
                <DatePicker selected={pickDate} onChange={ (date)=>setpickDate(date)}/>
                <button onClick={borrow}>Confirm</button>
                </div>:""}
            </div>
        </div>
    )
}
