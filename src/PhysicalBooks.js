import React from 'react'
import './PhysicalBooks.css'
import { Ebook as PhysicalBook } from './Ebook.js'
import { useParams } from 'react-router'


export const PhysicalBooks = () => {
    const { bookID } = useParams()
    return (
        <div className="physicalBooks">
            <PhysicalBook physical={true} bookID={bookID}/>
        </div>
    )
}
