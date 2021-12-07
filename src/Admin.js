import React, { useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import './Admin.css'


export const Admin = () => {
    const [value, setValue] = useState("")
    const navigate = useNavigate()
    return (
        <div className="admin">
            <div className="pageTitle"><h2>Admin Dashboard</h2></div>
            <div className="input__container">
                <input type="text" placeholder="Search..." value={value} onChange={(e)=>(setValue(e.target.value))}/>
                <span><i className="fa fa-search"></i></span>
            </div>
            <div className="admin__body">
                <div className="admin__bodySidebar">
                    <div onClick={()=>(navigate('list-books'))}><h4>Catalogue</h4></div>
                    <div onClick={()=>(navigate('add-book'))}><h4>Add Book</h4></div>
                    <div onClick={()=>(navigate('borrowed-books'))}><h4>Borrowed Books</h4></div>
                    <div onClick={()=>(navigate('defaulted-books'))}><h4>Defaulted Books</h4></div>
                    <div onClick={()=>(navigate('admin-profile'))}><h4>Profile</h4></div>
                    <div onClick={()=>(navigate('book-return'))}><h4>Book Return</h4></div>
                </div>
                <div className="admin__bodyContent">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
