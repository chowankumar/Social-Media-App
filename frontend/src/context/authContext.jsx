
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );


    const login = async (inputs) => {
      setCurrentUser({
        id:1,
        name: "paras ajbani",
        profilePic: "https://tse4.mm.bing.net/th?id=OIP.rKVHomQTwEnGFitIKLDZ1wHaJV&pid=Api&P=0&h=220"
      })
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);


    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    );

}