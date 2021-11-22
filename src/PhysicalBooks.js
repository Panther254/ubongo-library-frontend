import React from 'react'
import './PhysicalBooks.css'
import { Ebook as PhysicalBook } from './Ebook.js'

export const PhysicalBooks = () => {
    return (
        <div className="physicalBooks">
            <PhysicalBook physical={true}/>
            <PhysicalBook physical={true}/>
            <PhysicalBook physical={true}/>
            <PhysicalBook physical={true}/>
            <PhysicalBook physical={true}/>
        </div>
    )
}
