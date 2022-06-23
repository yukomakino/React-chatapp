import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

import Login from "./Login";
import SignUp from "./SignUp";

const Home = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const handleLogout = () => {
        signOut(auth);
        navigate('/login');
    }

    return (
        <>
            <h1>Home Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
};

export default Home;