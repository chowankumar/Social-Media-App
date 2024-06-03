import React, { useState } from 'react';
import moment from 'moment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../axios';

const Comment = ({ postId, commentsData, handleDeleteComment, currentUser }) => {
  const [newComment, setNewComment] = useState('');

  const queryClient = useQueryClient();

  const addCommentMutation = useMutation({
    mutationFn: (newComment) => {
      return makeRequest.post('/comments', { postId, desc: newComment });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', postId]);
    },
  });

  const handleAddComment = (e) => {
    e.preventDefault();
    addCommentMutation.mutate(newComment);
    setNewComment('');
  };

  return (
    <div className='comments mt-2'>
      <form onSubmit={handleAddComment} className='mb-4 flex gap-2 items-center'>
        <input
          type='text'
          placeholder='Add a comment...'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className='border p-2 w-[80%]'
        />
        <button type='submit' className='bg-blue-600 text-white px-2 py-2 rounded-md'>Comment</button>
      </form>
      {commentsData.map(comment => (
        <div key={comment.id} className='comment flex justify-between items-start p-4'>
          <div className='comment-left flex gap-2 '>
            <img src={comment.profilePic} alt="" className='w-[30px] h-[30px] rounded-full' />
            <div className='comment-info flex flex-col'>
              <span className='font-bold'>{comment.name}</span>
              <span className='text-[10px] block'>{moment(comment.createdAt).fromNow()}</span>
              <span>{comment.desc}</span>
            </div>
          </div>
          <div className='comment-right'>
            {comment.userId === currentUser.id && (
              <>
                
                <button onClick={() => handleDeleteComment(comment.id)}>delete</button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
