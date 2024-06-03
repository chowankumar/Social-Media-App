import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'

const Stroies = () => {

    const {currentUser} = useContext(AuthContext)
    const stories = [
        {
            id:1,
            name: "chowan",
            img:"https://tse1.mm.bing.net/th?id=OIP.L8bs33mJBAUBA01wBfJnjQHaHa&pid=Api&P=0&h=220"
        },
        {
            id:2,
            name: "amrat",
            img:"https://tse1.mm.bing.net/th?id=OIP.L8bs33mJBAUBA01wBfJnjQHaHa&pid=Api&P=0&h=220"
         },
        {
            id:3,
            name: "bhavish",
            img:"https://tse1.mm.bing.net/th?id=OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ&pid=Api&P=0&h=220"
        },
    ]

    
    
  return (
    <div className='stories flex gap-4 p-4 overflow-scroll no-scrollbar items-center justify-center'> 
          <div className='story relative'>
            <img className='h-[280px] w-[180px] rounded-lg' src={currentUser.profilePic ||"/th.jpeg"} alt="" />
            <span className='text-white font-bold left-2 bottom-2 absolute'>{currentUser.name}</span>
             <button className='absolute bottom-10 left-2 text-white bg-blue-600 border-none rounded-full w-8 h-8 cursor-pointer text-2xl flex items-center justify-center'>+</button>
            </div> 
        {
            stories.map(story=>(
                <div className="story relative" key={story.id}>
                    <img src={story.img} alt="" className='h-[280px] w-[180px]  rounded-lg' />
                     <span className='text-white font-bold left-2 bottom-2 absolute'>{story.name}</span>
                </div>
            ))
        }

    </div>
  )
}

export default Stroies