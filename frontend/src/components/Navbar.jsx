import React from 'react'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from 'react-router-dom';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';

const Navbar = () => {
  return (
  <div className="p-2.5 h-20 sticky top-0 z-[999] flex justify-between items-center bg-white border-b shadow-md">
    <div className="left flex gap-8 items-center">
      <Link to='/'>
       <span className='font-bold text-[25px] text-[#00008b]' >Lamasocial</span>
       </Link>
       <HomeOutlinedIcon/>
       <DarkModeOutlinedIcon/>
       <GridViewOutlinedIcon/>
       <div className="search border border-gray-300  rounded flex items-center gap-2 bg-transparent">
        <SearchOutlinedIcon/>
        <input className='w-[500px]' type="text" placeholder='Search...' />
       </div>
    </div>
    <div className="right flex gap-6 items-center">
      <PersonOutlinedIcon/>
      <EmailOutlinedIcon/>
      <NotificationsOutlinedIcon/>
      <div className="user flex items-center">
        <img src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt="" className='w-12' />
        <span className='text-[20px] font-semibold'>John Doe</span>

      </div>
    </div>
  </div>
  )
}

export default Navbar