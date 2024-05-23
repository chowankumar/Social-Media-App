import React from 'react'
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Twitter from '@mui/icons-material/Twitter';
import Posts from "../components/Posts"

const Profile = () => {
  return (
    <div className='profile'>

      <div className='images p-4 '>
        <img src="https://tse2.mm.bing.net/th?id=OIP.rRU3SoUt8zHHweMp4I_gtQHaEK&pid=Api&P=0&h=220" alt="" className='w-[100%] h-[350px] rounded-sm relative' />
        <img src="https://tse1.mm.bing.net/th?id=OIP.L8bs33mJBAUBA01wBfJnjQHaHa&pid=Api&P=0&h=220" alt="" className='rounded-full absolute top-[350px] m-auto left-0 right-32 w-[200px] h-[200px]' />
      </div>

      <div className="profileInfo flex items-center boxShadow h-[250px] bg-white w-[90%] p-4 rounded-lg m-auto mb-4">
        <div className="flex-1 flex gap-4">
          <a href="">
            <FacebookTwoToneIcon />
          </a>
          <a href="">
            <InstagramIcon />
          </a>

          <a href="">
            <Twitter />
          </a>
          <a href="">
            <LinkedInIcon />
          </a>
          <a href="">
            <PinterestIcon />
          </a>
        </div>

        <div className="middle flex-1  flex flex-col   gap-4 mt-[80px]">

          <span className='m-auto font-bold text-[30px]'>John Doe</span>

          <div className=' flex  justify-between items-center'>
            <div className='flex items-center gap-1 text-[15px]'>
              <PlaceIcon />
              <span>USA</span>
            </div>
            <div className='flex items-center gap-1 text-[15px]'>
              <LanguageIcon />
              <span>lama.dev</span>
            </div>
          </div>
          <button className='bg-blue-700 w-fit py-1 px-3 m-auto text-white rounded-lg'>Follow</button>
        </div>
        <div className="right flex justify-end flex-1">
          <a href="">
            <EmailOutlinedIcon/>
          </a>
          <a href="">
            <MoreVertIcon/>

          </a>
        </div>


      </div>
      <Posts />

    </div>
  )
}

export default Profile