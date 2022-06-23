import React, { useRef, useState } from "react";
import firebase from "../config/firebase";
import { useAuthContext } from "../context/AuthContext";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
  
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                console.log(err);
            });
    };

    const handleChangeEmail = (e) => {
        setEmail(e.currentTarget.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.currentTarget.value);
    };
    
    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => handleChangeEmail(e)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        value={password}
                        id="password"
                        name="password"
                        placeholder="Password" 
                        onChange={(e) => handleChangePassword(e)}
                    />
                </div>
                <button type="subumit">Sign Up</button>
            </form>
        </>
    );
};

export default SignUp;