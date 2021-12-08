import React, { useEffect, useState } from 'react'
import { Book } from './Book'
import './Books.css'

export const Books = ({ borrowed, defaulted }) => {
    const [books, setBooks] = useState([])
    const [booksBorrowed, setBorrowedBooks] = useState([])
    const [booksDefaulted, setDefauledBooks] = useState([])

    useEffect(() => {
        if(borrowed){
            fetch('/api/books/borrowed').then(response=>response.json())
            .then(data=>{console.log(data)
                setBorrowedBooks(data.borrowedBooks)})
        }else if(defaulted){
            fetch('/api/books/defaulted').then(response=>response.json())
            .then(data=>setDefaultedBooks(data.books))
        }else{
            fetch('/api/books/all').then(response=>response.json())
            .then(data=>setBooks(data.books))
        }
    }, [borrowed,defaulted])
    
    return (
        <div className="books">
           { console.log("books",books)}
           { console.log("Borrowedbooks",booksBorrowed)}
           { console.log("Defaultedbooks",booksDefaulted)}
           {books.length > 0? map(book=>(<Book id={book._id} key={book._id} title={book.title} author={book.author} imageURL={book.imageURL} />)) : <div> <h3>NO BOOKS YET</h3> </div>}
           {booksBorrowed.length > 0? map(book=>(<Book id={book._id} key={book._id} title={book.book.title} author={book.book.author} imageURL={book.book.imageURL} />)) : <div> <h3>NO BOOKS YET</h3> </div>}
           {booksDefaulted.length > 0? map(book=>(<Book id={book._id} key={book._id} title={book.title} author={book.author} imageURL={book.imageURL} />)) : <div> <h3>NO BOOKS YET</h3> </div>}
        </div>
    )
}
