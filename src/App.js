import React from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Room from "./pages/Room";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Room />} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/signup' element={<SignUp/>} />
                </Routes>
        </BrowserRouter>
    );
};

export default App;