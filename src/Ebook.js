import React,{ useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from 'react-router'
import './Ebook.css'

export const Ebook = ({ physical, title, author, publisher, ISBN, copiesAvailable }) => {
    
    const { bookDetails } = useParams()
    const [pickDate, setpickDate] = useState(new Date());
    const [buttonClicked, setbuttonClicked] = useState(false);
    
    const handleClick = ()=>(setbuttonClicked(!buttonClicked))
    
    return (
        <div className="ebook">
            <div className="ebook__imageContainer">
                <img src="https://cdn.asaha.com/assets/thumbs/167/16740d4fc72ca1ef857e4fec05a83f7a-s.jpg" alt="" />
            </div>
            <div className="ebook__info">
                <h4>Title: {bookDetails}</h4>
                <h4>Author:</h4>
                <h4>Publisher:</h4>
                <h4>ISBN Number:</h4>
                <h4>Copies Available:</h4>
                {physical?<button onClick={handleClick}>Schedule Pickup Date</button>:<button>Download</button>}
                {buttonClicked?<div className="datepicker__visible">
                <DatePicker selected={pickDate} onChange={ (date)=>setpickDate(date)}/>
                <button>Confirm</button>
                </div>:""}
            </div>
        </div>
    )
}
