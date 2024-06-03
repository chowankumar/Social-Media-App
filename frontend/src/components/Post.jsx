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
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { AuthContext } from '../context/authContext';

const Post = ({ post }) => {
  const [componentOpen, setComponentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const { isLoading: isLoadingLikes, error: errorLikes, data: likesData } = useQuery({
    queryKey: ["likes", post.id],
    queryFn: () => makeRequest.get("/likes?postId=" + post.id).then((res) => res.data),
  });

  const { isLoading: isLoadingComments, error: errorComments, data: commentsData } = useQuery({
    queryKey: ["comments", post.id],
    queryFn: () => makeRequest.get("/comments?postId=" + post.id).then((res) => res.data),
  });

  const handleCommentClick = () => {
    setComponentOpen(!componentOpen);
  };

  const queryClient = useQueryClient();

  const likeMutation = useMutation({
    mutationFn: (liked) => {
      if (liked) return makeRequest.delete("/likes?postId=" + post.id);
      return makeRequest.post("/likes", { postId: post.id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["likes", post.id]);
    },
  });

  const handleLike = () => {
    likeMutation.mutate(likesData.includes(currentUser.id));
  };

  const deleteMutation = useMutation({
    mutationFn: (postId) => {
      return makeRequest.delete("/posts/" + postId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate(post.id);
  };

  const deleteCommentMutation = useMutation({
    mutationFn: (commentId) => {
      return makeRequest.delete(`/comments?postId=${post.id}&commentId=${commentId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["comments", post.id]);
    },
  });

  const handleDeleteComment = (commentId) => {
    deleteCommentMutation.mutate(commentId);
  };

  return (
    <div className='post bg-white shadow-custom rounded-[20px] w-[95%] m-auto mb-6'>
      <div className="container p-[20px] ">
        <div className="user flex items-center justify-between">
          <div className='userInfo-left flex gap-3 items-center'>
            <img src={post.profilePic} alt="" className='w-[40px] h-[40px] rounded-full' />
            <Link to={`/profile/${post.userId}`}>
              <div className='flex flex-col leading-[20px]'>
                <span className='font-bold text-[19px]'>{post.name}</span>
                <span className='text-[12px] text-gray-500'>{moment(post.createdAt).fromNow()}</span>
              </div>
            </Link>
          </div>
          <div className='userInfo-right'>
            <MoreHorizIcon onClick={() => setMenuOpen(!menuOpen)} />
            {menuOpen && post.userId === currentUser.id && (
              <button onClick={handleDelete}>delete</button>
            )}
          </div>
        </div>
        <div className="content">
          <span>{post.desc}</span>
          <img src={"/upload/" + post.img} alt="" className='w-[100%] max-h-[500px] mt-4 ' />
        </div>
        <div className='lastportion flex gap-4 mt-4 items-center'>
          <div className="item flex items-center gap-1 cursor-pointer text-[14px]">
            {isLoadingLikes ? (
              <span>Loading...</span>
            ) : errorLikes ? (
              <span>Error loading likes</span>
            ) : (
              <>
                {likesData && likesData.includes(currentUser.id) ? (
                  <FavoriteOutlinedIcon className='text-red-700' onClick={handleLike} />
                ) : (
                  <FavoriteBorderOutlinedIcon onClick={handleLike} />
                )}
                <span>{likesData ? likesData.length : 0}</span>
              </>
            )}
          </div>
          <div className="item flex items-center gap-1 cursor-pointer text-[14px]" onClick={handleCommentClick}>
            <TextsmsOutlinedIcon />
            {isLoadingComments ? (
              <span>Loading...</span>
            ) : errorComments ? (
              <span>Error loading comments</span>
            ) : (
              <span>{commentsData ? commentsData.length : 0} Comments</span>
            )}
          </div>
          <div className="item flex items-center gap-1 cursor-pointer text-[14px]">
            <ShareOutlinedIcon />
            <span>12 Shares</span>
          </div>
        </div>
        {componentOpen && <Comment postId={post.id} commentsData={commentsData} handleDeleteComment={handleDeleteComment} currentUser={currentUser} />}
      </div>
    </div>
  );
};

export default Post;
