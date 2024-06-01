import React, { useContext, useState } from 'react';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comment from "../components/Comment";
import moment from 'moment';
import { makeRequest } from '../axios';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../context/authContext';

const Post = ({ post }) => {
  const [componentOpen, setComponentOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery({
    queryKey: ["likes", post.id],
    queryFn: () => makeRequest.get("/likes?postId=" + post.id).then((res) => res.data),
  });

  const handleCommentClick = () => {
    setComponentOpen(!componentOpen);
  };

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
          <div className='userInfo-right'><MoreHorizIcon /></div>
        </div>
        <div className="content">
          <span>{post.desc}</span>
          <img src={"/upload/" + post.img} alt="" className='w-[100%] max-h-[500px] mt-4 ' />
        </div>
        <div className='lastportion flex gap-4 mt-4 items-center'>
          <div className="item flex items-center gap-1 cursor-pointer text-[14px]">
            {isLoading ? (
              <span>Loading...</span>
            ) : error ? (
              <span>Error loading likes</span>
            ) : (
              <>
                {data && data.includes(currentUser.id) ? (
                  <FavoriteOutlinedIcon className='text-red-700' />
                ) : (
                  <FavoriteBorderOutlinedIcon />
                )}
                <span>{data ? data.length : 0}</span>
              </>
            )}
          </div>
          <div className="item flex items-center gap-1 cursor-pointer text-[14px]" onClick={handleCommentClick}>
            <TextsmsOutlinedIcon />
            <span>12 Comments</span>
          </div>
          <div className="item flex items-center gap-1 cursor-pointer text-[14px]">
            <ShareOutlinedIcon />
            <span>12 Shares</span>
          </div>
        </div>
        {componentOpen && <Comment postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;
