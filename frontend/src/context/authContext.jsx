import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
 

    const login = async (input) => {
        const res = await axios.post('http://localhost:8000/api/auth/login', input, {
            withCredentials: true,
        });
        setCurrentUser(res.data);
    };

    const logout = async () => {
        await axios.post('http://localhost:8000/api/auth/logout', {}, {
            withCredentials: true,
        });
        setCurrentUser(null);
        localStorage.removeItem("user");
        
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
