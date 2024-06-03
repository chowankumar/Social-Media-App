import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { AuthContext } from '../context/authContext';

const Navbar = () => {
    const { currentUser,logout } = useContext(AuthContext);

    return (
        <div className="p-2.5 h-20 sticky top-0 z-[999] flex justify-between items-center bg-white border-b shadow-md">
            <div className="left flex gap-8 items-center">
                <span className='font-bold text-[25px] text-[#00008b]'>Social-With-54</span>
                <Link to='/'>
                    <HomeOutlinedIcon />
                </Link>
                <div className="search border border-gray-300 rounded flex items-center gap-2 bg-transparent">
                    <SearchOutlinedIcon />
                    <input className='w-[500px]' type="text" placeholder='Search...' />
                </div>
            </div>
            <div className="right flex gap-6 items-center">
                <PersonOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className="user flex gap-2 items-center">
                    {currentUser && (
                        <>
                            <img src={currentUser.profilePic} alt="" className='w-12 rounded-full' />
                            <span className='text-[20px] font-semibold'>{currentUser.name}</span>
                            <button onClick={logout} className='ml-4 px-4 py-2 bg-[#00008b] text-white rounded'>
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
