import React, { useEffect, useState } from 'react'
import { Book } from './Book'
import './Books.css'

export const Books = ({ borrowed=false, defaulted=false, category=false }) => {
    const [books, setBooks] = useState([])
    const [booksBorrowed, setBorrowedBooks] = useState([])
    const [defaultedBooks, setDefaultedBooks] = useState([])
    const [bookCategory, setBookCategory] = useState([])

    useEffect(() => {
        if(borrowed){
            fetch('/api/books/borrowed').then(response=>response.json())
            .then(data=>{console.log(data)
                setBorrowedBooks(data.borrowedBooks)})
        }else if(defaulted){
            fetch('/api/books/defaulted').then(response=>response.json())
            .then(data=>setDefaultedBooks(data.defaultedBooks))
        }else if(category){
            fetch(`api/books/search?queryString=${category}`).then(response=>response.json())
            .then(data=>{console.log("bookCategotydata",data)})
        }
        else{
            fetch('/api/books/all').then(response=>response.json())
            .then(data=>setBooks(data.books))
        }
    },[borrowed,defaulted,category])
    
    return (
        <div className="books">
            {category? (<div><h3>${bookCategory}</h3></div>): false}
           {borrowed? (booksBorrowed.length > 0? booksBorrowed.map(book=>(<Book id={book._id} key={book._id} title={book.book.title} author={book.book.author} imageURL={book.book.imageURL} />)) : <div> <h3>NO BOOKS YET</h3> </div>):defaulted? (defaultedBooks.length > 0? defaultedBooks.map(book=>(<Book id={book._id} key={book._id} title={book.title} author={book.author} imageURL={book.imageURL} />)) : <div> <h3>NO BOOKS YET</h3> </div>):books.length > 0? books.map(book=>(<Book id={book._id} key={book._id} title={book.title} author={book.author} imageURL={book.imageURL} />)) : <div> <h3>NO BOOKS YET</h3> </div>}
           {category? (bookCategory.length> 0 ? (bookCategory.map(book=>(<Book id={book._id} key={book._id} title={book.book.title} author={book.book.author} imageURL={book.book.imageURL} />))):<div><h4>Coming Soon!</h4></div>) : false}
        </div>
    )
}
