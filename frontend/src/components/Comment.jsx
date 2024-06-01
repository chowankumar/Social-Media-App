import React, { useContext, useState } from 'react';
import { AuthContext } from "../context/authContext";
import { makeRequest } from "./../axios.js";
import moment from "moment";
import { useQuery  ,useMutation, useQueryClient } from "@tanstack/react-query";

const Comment = ({ postId }) => {

  const [desc,setDesc] = useState("")
  const { currentUser } = useContext(AuthContext);

  const { isLoading,error,data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => makeRequest.get("/comments?postId=" + postId).then((res) => res.data),
  });

  console.log(data)

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newComment) => makeRequest.post("/comments",newComment),
    onSuccess: () => {
      queryClient.invalidateQueries(["comments"]);
    },
  });

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId});
    setDesc("");
  
  };

   

  return (
    <div className='comments'>

      <div className= "write flex gap-4 justify-between mt-4">
        <img src={currentUser.profilePic} alt="" className='w-[40px] h-[40px] rounded-full' />
        <input type="text" placeholder='Write a comment' 
        value={desc}
        onChange={(e)=> setDesc(e.target.value)}
        className='w-[80%] bg-transparent' />
        <button className='bg-blue-500 text-white px-2 font-bold rounded-lg' onClick={handleClick}>Send</button>
      </div>


      {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((comment) => (

            <div className="my-8 flex justify-between gap-5">
              <img src={comment.profilePic} alt="" />

              <div className="info w-[70%] flex flex-col gap-1 items-start">
                <span className='font-bold'>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>

              <span className="date flex-1 self-center text-gray-500 text-xs">
                {moment(comment.createdAt).fromNow()}
              </span>
            </div>
          ))}
    </div>
  )
}

export default Comment;
