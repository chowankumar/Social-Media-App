import React from 'react'
import Post from './Post'

const Posts = () => {
  const posts = [
    {
      id:1,
      name:"Chowan Kumar",
      userId: 1,
      profilePic: "https://tse1.mm.bing.net/th?id=OIP.X9gYA6VDsnaSpMqBOWKH5wHaGv&pid=Api&P=0&h=220",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquid officiis veritatis",
      img: "https://tse4.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gAAAA&pid=Api&P=0&h=220"
    },
    {
      id: 2,
      name:"Bhavish Kumar",
      userId:1,
      profilePic: "https://tse1.mm.bing.net/th?id=OIP.X9gYA6VDsnaSpMqBOWKH5wHaGv&pid=Api&P=0&h=220",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquid officiis veritatis!",
      img: "https://tse4.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gAAAA&pid=Api&P=0&h=220"
    }
  ]

  return (
    <div className='posts flex flex-col gap-[50px]'>
      {posts.map(post => (
        <Post post={post}/>
      ))}
    </div>
  )
}

export default Posts
