import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './Login.css';
import { useStateValue } from "./DataStore";
import { actionTypes } from './reducer';

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [,dispatch] = useStateValue()
    
    const validate = ({email, password}) => {
        if(!email){
            toast.warn("Email is Required")
            return false
        }else if(!password){
            toast.warn("Password required")
            return false
        }else{
            return true
        }
    }

    const signIn = e =>{
        e.preventDefault();
        const formDetails = {
            email: email,
            password: password,
        }
        const isValid = validate(formDetails)
        if(isValid){
            console.log(formDetails)
            fetch('/api/auth/signin',{
                method: 'POST',
                headers:{
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(formDetails)
            }).then(response=>{
                if(response.status===200){
                    response.json().then(data=>{
                        alert(data.message)
                        dispatch({
                            type: actionTypes.SET_USER,
                            user: data.user
                        })
                     const isAdmin = data.user.roles.some(role=>role.name==="admin")
                     isAdmin?navigate("/admin"):navigate("/home")
                    })
                }else{
                    response.json().then(data=>alert(data.message))
                }
            })
    }}

    return (
        <div className="signIn">
            <div className="signIn__container">
                <div><h3>SIGN IN</h3></div>
                <ToastContainer/>
                <form action="">
                    <div className="input">
                        <h5>Email:</h5>
                        <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input">
                        <h5>Password:</h5>
                        <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    
                    <div className="input__button"><button className="login__button" onClick={signIn}>Login</button></div>               
                </form>
                <div className="signIn__containerInfo">
                    <p>
                        Don't Have An Account? <Link to="/register">Register</Link>
                    </p>
                    <p>
                        Forgot Password? <Link to="/password-reset">Click here</Link>
                    </p>
                </div>
            </div>    
        </div>
    )
    }
