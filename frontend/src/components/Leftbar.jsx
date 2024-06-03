import React,{useContext} from 'react'
import Friends from "../assets/1.png";
import Groups from "../assets/2.png";
import Market from "../assets/3.png";
import Watch from "../assets/4.png";
import Memories from "../assets/5.png";
import Events from "../assets/6.png";
import Gaming from "../assets/7.png";
import Gallery from "../assets/8.png";
import Videos from "../assets/9.png";
import Messages from "../assets/10.png";
import Tutorials from "../assets/11.png";
import Courses from "../assets/12.png";
import Fund from "../assets/13.png";
import { AuthContext } from '../context/authContext';

const Leftbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="leftbar w-[20%] h-calc-100vh-70px sticky top-[80px]  overflow-scroll no-scrollbar">

      <div className="container">

        <div className="flex flex-col justify-start gap-5 items-start pl-4 pt-8 bg-white">

           


          <div className='flex gap-3 items-center'>
            <img src={Friends} alt="" className='h-[30px] w-[30px]' />
            <span className='font-semibold text-[18px]'>Friends</span>

          </div>

          <div className='flex gap-3 items-center'>
            <img src={Groups} alt="" className='h-[30px] w-[30px]' />
            <span className='font-semibold text-[18px]'>Groups</span>

          </div>

          <div className='flex gap-3 items-center'>
            <img src={Market} alt="" className='h-[30px] w-[30px]' />
            <span className='font-semibold text-[18px]'>Marketplace</span>

          </div>

          <div className='flex gap-3 items-center'>
            <img src={Watch} alt="" className='h-[30px] w-[30px]' />
            <span className='font-semibold text-[18px]'>Watch</span>

          </div>

          <div className='flex gap-3 items-center'>
            <img src={Memories} alt="" className='h-[30px] w-[30px]' />
            <span className='font-semibold text-[18px]'>Memories</span>

          </div>

          <hr className='border h-[0.25px] w-[100%] border-gray-100' />

          <span className='text-[20px] font-semibold'>Your Shortcuts</span>

          <div className='flex gap-3 items-center'>
            <img src={Events} alt="" className='h-[30px] w-[30px]' />
            <span className='font-semibold text-[18px]'>Events</span>

          </div>

          <div className='flex gap-3 items-center'>
            <img src={Gaming} alt="" className='h-[30px] w-[30px]' />
            <span className='font-semibold text-[18px]'> Gaming</span>

          </div>

          <div className='flex gap-3 items-center'>
            <img src={Gallery} alt="" className='h-[30px] w-[30px]' />
            <span className='font-semibold text-[18px]'> Gallery</span>

          </div>

          <div className='flex gap-3 items-center'>
            <img src={Videos} alt="" className='h-[30px] w-[30px]' />
            <span className='font-semibold text-[18px]'>Videos</span>

          </div>

          <div className='flex gap-3 items-center'>
            <img src={Messages} alt="" className='h-[30px] w-[30px]' />
            <span className='font-semibold text-[18px]'>Messages</span>

          </div>

          <hr className='border h-[0.25px] w-[100%] border-gray-100' />

          <span className='text-[20px] font-semibold'>Others</span>

          <div className='flex gap-3 items-center'>
            <img src={Fund} alt="" className='h-[30px] w-[30px]' />
            <span className='font-semibold text-[18px]'>Fundraiser</span>

          </div>

          <div className='flex gap-3 items-center'>
            <img src={Tutorials} alt="" className='h-[30px] w-[30px]' />
            <span className='font-semibold text-[18px]'>Tutorials</span>

          </div>

          <div className='flex gap-3 items-center'>
            <img src={Courses} alt="" className='h-[30px] w-[30px]' />
            <span className='font-semibold text-[18px]'>Courses</span>

          </div>











        </div>

      </div>

    </div>
  )
}

export default Leftbar