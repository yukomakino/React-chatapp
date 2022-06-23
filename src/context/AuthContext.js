import { createContext, useState, useContext, useEffect } from "react";
import { getAuth } from "firebase/auth";

const auth = getAuth();
const AuthContext = createContext();

export function useAuthContext() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState('');
    const value = {
        user,
    };

    useEffect(()=> {
        const unsubcribed = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return () => {
            unsubcribed();
        };
    }, []);
    
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}