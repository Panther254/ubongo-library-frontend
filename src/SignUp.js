import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './SignUp.css';

export const SignUp = () => {
    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [email, setEmail] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const navigate = useNavigate()

    const validate = ({firstName, secondName, email, password, password2}) => {
        if(!firstName){
            toast.warn("First Name is Required")
            return false
        }else if(!secondName){
            toast.warn("Second Name is Required")
            return false
        }else if(!email){
            toast.warn("Email is Required")
            return false
        }else if(!password){
            toast.warn("Password required")
            return false
        }else if(password !== password2){
            toast.warn("The passwords do not match")
            setPassword1("")
            setPassword2("")
            return false
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            toast.warn("Invalid Email Address")
            setEmail("")
            return false
        }else{
            return true
        }

    }

    const signUp = e =>{
        e.preventDefault();
        const formDetails = {
            firstName: firstName,
            lastName: secondName,
            email: email,
            password: password1,
            password2: password2,
        }
        const isValid = validate(formDetails)
        if(!isValid){
            // Do some fetch actions
            // javascript object notation(json)
            console.log(formDetails)
            fetch('/api/auth/signup/',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDetails),
            }).then(response=>(response.json()))
            .then(data=>{
                console.log("data>>>",data)
                navigate('/')
            })
        }
    }

    return (
        <div className="signUp">
            <div className="signUp__container">
                <div><h3>REGISTER</h3></div>
                <ToastContainer/>
                <form action="">
                    <div className="input">
                        <h5>First Name:</h5>
                        <input type="text" name="firstName" value={firstName} onChange={e=> setFirstName(e.target.value)} />
                    </div>
                    <div className="input">
                        <h5>Second Name:</h5>
                        <input type="text" name="secondName" value={secondName} onChange={e => setSecondName(e.target.value)} />
                    </div>
                    <div className="input">
                        <h5>Email:</h5>
                        <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input">
                        <h5>Password:</h5>
                        <input type="password" name="password1" value={password1} onChange={e => setPassword1(e.target.value)} />
                    </div>
                    <div className="input">
                        <h5>Confirm Password:</h5>
                        <input type="password" name="password2" value={password2} onChange={e => setPassword2(e.target.value)} />
                    </div>

                    <div className="input__button"><button className="register__button" onClick={signUp}>Register</button></div>               
                </form>

            </div>
            
        </div>
    )
}
