import React from "react";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <AuthProvider>
            <div style={{ margin: '2rem' }}>
                <Router>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='signup' element={<SignUp />} />
                        <Route path='login' element={<Login />} />
                    </Routes>
                </Router>
            </div>
        </AuthProvider>
    );
};

export default App;