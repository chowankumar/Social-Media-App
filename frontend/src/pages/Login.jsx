import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../context/authContext.jsx';

const Login = () => {
    const [input, setInput] = useState({
        username: "",
        password: "",
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
        <div className="h-screen  flex items-center justify-center bg-[#efeded]">

            <div className="w-[80%] flex justify-center items-center rounded-lg min-h-[600px] overflow-hidden">

                <div className="flex-1 p-12 flex flex-col gap-8 ">
                   <h1 className='text-[80px] font-bold leading-[100px] text-[#0866ff]'>Social-with-54 </h1>

                    <span className='text-[18px] font-medium'>Don't you have an account?</span>

                    <Link to="/register">
                        <button className='w-1/2 px-4 py-4 border-none bg-[#0866ff] rounded-md  text-[20px] font-bold cursor-pointer text-white'>Create new account</button>
                    </Link>
                </div>


                <div className="right w-[40%] p-12 flex flex-col gap-12 justify-center rounded-md bg-[#fffcfc] ">
                     
                    <form className='flex flex-col items-center gap-8' onSubmit={handleLogin}>
                        <input className='border rounded-sm border-gray-300 pl-2 pb-4 pt-4 w-[80%] font-bold' type="text" placeholder='Username'
                            name='username'
                            onChange={handleChange}
                        />

                        <input className='border rounded-sm border-gray-300 pl-2 pb-4 pt-4 w-[80%] font-bold' type="password" placeholder='Password'
                            name="password"
                            onChange={handleChange}
                            autoComplete="current-password"
                        />

                        {err && <div className="text-red-500">{err}</div>}

                        <button type="submit" className='w-[80%] px-4 py-4 rounded-md border-none bg-[#0866ff] text-white font-bold cursor-pointer mt-[12px]'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
