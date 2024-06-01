import React, { useState } from 'react'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom"
import Comment from "../components/Comment"
import moment from "moment";

const Post = ({post}) => {
  const [componentOpen,setComponentOpen] = useState(false);

  const like = true;

  return (
    <div className='post bg-white shadow-custom rounded-[20px] w-[92%] m-auto'>
      <div className="container p-[20px] ">

        <div className="user flex items-center justify-between">
          <div className='userInfo-left flex gap-3 items-center'>
            <img src={post.profilePic} alt="" className='w-[40px] h-[40px] rounded-full' />
            <Link to={`/profile/${post.userId}`}>
              <div className='flex flex-col leading-[20px]'>
                <span className='font-bold'>{post.name}</span>
                <span className='text-[12px]'>{moment(post.createdAt).fromNow()}</span>
              </div>
            </Link>
          </div>
          <div className='userInfo-right'><MoreHorizIcon/></div>
        </div>
        <div className="content">
          <span>{post.desc}</span>
          <img src={"../../public/upload/"+post.img} alt="" className='w-[100%] max-h-[500px] mt-4 ' />
        </div>
        <div className='lastportion flex gap-4 mt-4 items-center'>
          <div className="item flex items-center gap-1 cursor-pointer text-[14px]">
            {like ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>

          <div className="item flex items-center gap-1 cursor-pointer text-[14px]" onClick={()=>setComponentOpen(!componentOpen)}>
             <TextsmsOutlinedIcon />
            12 Comments
          </div>

          <div className="item flex items-center gap-1 cursor-pointer text-[14px]">
           <ShareOutlinedIcon/>
            12 Shares
          </div>
        </div>
        {
          componentOpen && <Comment/>
        }
      </div>
    </div>
  )
}

export default Post
