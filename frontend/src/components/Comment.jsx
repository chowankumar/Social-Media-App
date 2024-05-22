import React, { useContext } from 'react'
import {AuthContext} from "../context/authContext"

const comment = [
    {
      id:1,
      name:"Chowan Kumar",
      userId: 1,
      profilePic: "https://tse1.mm.bing.net/th?id=OIP.X9gYA6VDsnaSpMqBOWKH5wHaGv&pid=Api&P=0&h=220",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquid officiis veritatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquid officiis veritatis",
      img: "https://tse4.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gAAAA&pid=Api&P=0&h=220"
    },
    {
      id: 2,
      name:"Bhavish Kumar",
      userId:1,
      profilePic: "https://tse1.mm.bing.net/th?id=OIP.X9gYA6VDsnaSpMqBOWKH5wHaGv&pid=Api&P=0&h=220",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquid officiis veritatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquid officiis veritatis!",
      img: "https://tse4.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gAAAA&pid=Api&P=0&h=220"
    }
  ]


const Comment = () => {
    const {currentUser} = useContext(AuthContext)
  return (
    <div className='comments'>
        <div className="write flex gap-4 justify-between mt-4">
            <img src={currentUser.profilePic} alt="" className='w-[40px] h-[40px] rounded-full'/>
            <input type="text" placeholder='Write a comment' className='w-[80%] bg-transparent' />
            <button className='bg-blue-500 text-white px-2 font-bold rounded-lg'>Send</button>
        </div>
        {
           comment.map((comment)=>(
            <div className='comment my-7 flex justify-between gap-5'>
                 <img src={comment.img} alt="" className='w-[40px] h-[40px] rounded-full object-cover'/>
                 <div className='info flex-[5] flex flex-col gap-[3px] items-start'>
                   <span >{comment.name}</span>
                    <p >{comment.desc}</p>  
                 </div>
                 <span  className='date flex-1 self-center text-gray-500 text-xs'>1 hour ago</span>
                 
            </div>
           ))
        }

    </div>
  )
}

export default Comment