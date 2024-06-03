import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
  });

  const [err, setErr] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setErr(null);
    setSuccess(null);

    try {
      await axios.post('http://localhost:8000/api/auth/register', input);
      setSuccess('You are registered successfully!');
      setInput({
        username: '',
        email: '',
        password: '',
        name: '',
      });
    } catch (err) {
      if (err.response) {
        setErr(err.response.data);
      } else if (err.request) {
        setErr('No response from server');
      } else {
        setErr('Error: ' + err.message);
      }
    }
  };

  return (
    <div className="h-screen bg-[rgb(193, 190, 255)] flex items-center justify-center bg-[#d2d1e8]">

      <div className="w-1/2 flex flex-row-reverse bg-white rounded-lg min-h-[600px] overflow-hidden">
        <div className="flex-1 p-12 flex flex-col gap-8 bg-[#1f1c4d] text-white">
          <h1 className="text-[100px] leading-[100px]">Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span className="text-[14px]">Do you have an account?</span>
          <Link to="/login">
            <button className="w-1/2 px-4 py-2 border-none bg-white text-rebeccapurple font-bold cursor-pointer text-[#1f1c4d]">
              Login
            </button>
          </Link>
        </div>

        
        <div className="flex-1 p-12 flex flex-col gap-12 justify-center">
          <h1 className="text-[#1f1c4d] text-[50px] font-bold">Register</h1>
          <form className="flex flex-col gap-8">
            <input
              className="border-b border-gray-300 pb-4 pt-4"
              type="text"
              placeholder="Username"
              name="username"
              value={input.username}
              onChange={handleChange}
            />
            <input
              className="border-b border-gray-300 pb-4 pt-4"
              type="email"
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={handleChange}
            />
            <input
              className="border-b border-gray-300 pb-4 pt-4"
              type="password"
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={handleChange}
            />
            <input
              className="border-b border-gray-300 pb-4 pt-4"
              type="text"
              placeholder="Name"
              name="name"
              value={input.name}
              onChange={handleChange}
            />
            {err && <div className="text-red-500">{err}</div>}
            {success && <div className="text-green-500">{success}</div>}
            <button
              className="w-1/2 px-4 py-2 border-none bg-[#1f1c4d] text-white font-bold cursor-pointer"
              onClick={handleClick}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
