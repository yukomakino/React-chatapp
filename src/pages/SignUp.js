import React, { useState } from "react";
import firebase from "../config/firebase";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email"
                        velue={email}
                        id="email"
                        name="email"
                        placeholder="Email" 
                        onChange={e => setEmail(e.target.value)}
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
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type="subumit">Sign Up</button>
            </form>
        </>
    );
};

export default SignUp;