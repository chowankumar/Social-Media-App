import React, { useState } from 'react';
import { makeRequest } from "../axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Update = ({ setOpenUpdate, user }) => {
  const [cover, setCover] = useState(null);
  const [profile, setProfile] = useState(null);

  const [texts, setTexts] = useState({
    name: "",
    city: "",
    website: ""
  });

  const upload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (user) => makeRequest.put("/users", user),
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
    },
  });

  const handleClick = async (e) => {
    e.preventDefault();
    let coverUrl;
    let profileUrl;

    coverUrl = cover ? await upload(cover) : user.coverPic;
    profileUrl = profile ? await upload(profile) : user.profilePic;

    mutation.mutate({ ...texts, coverPic: coverUrl, profilePic: profileUrl });
    setOpenUpdate(false);
  };

  return (
    <div className='update absolute top-0 bottom-0 left-0 right-0 m-auto w-[50%] h-[50%]  bg-[#efeded] z-[999] flex '>
      

      <form action="" className='flex flex-col items-center justify-center gap-2 mt-6 w-[90%]'>
        <input type="file"  onChange={e => setCover(e.target.files[0])}  />
        <input type="file" onChange={e => setProfile(e.target.files[0])} />
        <input type="text" name="name" onChange={handleChange} className='border w-[60%] p-2 rounded text-black' placeholder='Name' />
        <input type="text" name="city" onChange={handleChange} className='border w-[60%] p-2 rounded text-black' placeholder='City' />
        <input type="text" name="website" onChange={handleChange} className='border w-[60%] p-2 rounded text-black'  placeholder='Website'/>
        <button onClick={handleClick} className='bg-[#0866ff] px-4 py-1 text-white font-bold rounded'>Update</button>
      </form>
      <button onClick={() => setOpenUpdate(false)} className='w-[5%] h-[30px] rounded-full text-white mt-4 bg-red-600'>X</button>

      
    </div>
  );
};

export default Update;
