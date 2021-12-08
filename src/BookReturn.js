import React, { useState } from 'react'

export const BookReturn = () => {
    const [input, setInput] = useState("")
    const handleClick = ()=>{
        fetch('/api/books/return',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({id:input})
        })
        .then(res=> res.json())
        .then(data=>alert(data.message))
    }
    
    return (
        <div className="bookreturn">
            <form action="">
                <h4>Book ID:</h4>
                <input  value={input} onChange={(e)=>setInput(e.target.value)}/>
                <button onClick={handleClick}>Return</button>
            </form>
        </div>
    )
}
