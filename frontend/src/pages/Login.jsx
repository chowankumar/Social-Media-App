import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../context/authContext.jsx';

const Login = () => {
    const [input,setInput] = useState({
        username:"",
        password:"",
    });

    
    const [err, setErr] = useState(null);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(input);
            navigate("/");
        } catch (error) {
            console.error("Login error:", error); 
            setErr(error.message || "An error occurred during login.");
        }
    };

    return (
        <div className="h-screen bg-[#d2d1e8] flex items-center justify-center">
            <div className="w-1/2 flex bg-white rounded-lg min-h-[600px] overflow-hidden">
                <div className="flex-1 p-12 flex flex-col gap-8 text-white bg-[#1f1c4d]">
                    <h1 className='text-[100px] leading-[100px]'>Hello <br /> World</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
                        alias totam numquam ipsa exercitationem dignissimos, error nam,
                        consequatur.
                    </p>
                    <span className='text-[14px]'>Don't you have an account?</span>

                    <Link to="/register">
                        <button className='w-1/2 px-4 py-2 border-none bg-white text-rebeccapurple font-bold cursor-pointer text-[#1f1c4d]'>Register</button>
                    </Link>
                </div>
                <div className="right flex-1 p-12 flex flex-col gap-12 justify-center">
                    <h1 className='text-[#1f1c4d] text-[50px] font-bold'>Login</h1>
                    <form className='flex flex-col gap-8' onSubmit={handleLogin}>
                        <input className='border-b border-gray-300 pb-4 pt-4' type="text" placeholder='Username'
                            name='username'
                            onChange={handleChange}
                        />

                        <input className='border-b border-gray-300 pb-4 pt-4' type="password" placeholder='Password'
                            name="password"
                            onChange={handleChange}
                            autoComplete="current-password"
                        />

                        {err && <div className="text-red-500">{err}</div>}

                        <button type="submit" className='w-1/2 px-4 py-2 border-none bg-[#1f1c4d] text-white font-bold cursor-pointer mt-[12px]'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
