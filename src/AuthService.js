import React, { useEffect, useState } from "react";
import firebase from "./config/firebase";

const AuthContex = React.createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase
            .auth()
            .onAuthStateChanged(user => {
                setUser(user)
            });
    }, []);

    return <AuthContex.Provider value={user}>{children}</AuthContex.Provider>;
};

export { AuthContex, AuthProvider };