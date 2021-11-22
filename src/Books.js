import React, { useEffect } from 'react'
import { Book } from './Book'
import './Books.css'

export const Books = ({category, borrowed, defaulted}) => {
    useEffect(() => {
        
    
    }, [])
    
    return (
        <div className="books">
           <Book />
           <Book />
           <Book />
           <Book />
           <Book />
        </div>
    )
}
