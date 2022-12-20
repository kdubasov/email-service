import { createContext, useContext, useEffect, useState } from "react";
import {
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import {authDB} from "../database/firebase-connect.js";

const userAuthContext = createContext(null);

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    function logOut() {
        return signOut(authDB);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(authDB, (currentuser) => {
            console.log("Auth data:\n", currentuser);
            setUser(currentuser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <userAuthContext.Provider
            value={{
                user,
                logOut,
            }}
        >
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext);
}
