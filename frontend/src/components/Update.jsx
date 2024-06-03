import React, { useState } from 'react'
import {makeRequest} from "../axios"
import {useMutation,useQueryClient} from "@tanstack/react-query"



const Update = ({setOpenUpdate,user}) => {
    const [cover,setCover] = useState(null)
    const [profile,setProfile] = useState(null)

    const [texts,setTexts] = useState({
        name : "",
        city : "",
        websites : ""
    })

    const upload = async (file) => {
        try {
          const formData = new FormData();
          formData.append("file",file);
          const res = await makeRequest.post("/upload",formData);
          return res.data;
        } catch (err) {
          console.log(err);
        }
      };

    const handleChange = (e)=>{
               setTexts((prev)=>({...prev,[e.target.name]:[e.target.value]}))
    }


    const queryClient = useQueryClient();


    const mutation = useMutation({
      mutationFn: (user) => makeRequest.post("/users",user),
      onSuccess: () => {
        queryClient.invalidateQueries(["user"]);
      },
    });
  
    const handleClick = async (e) => {
      e.preventDefault();
      let coverUrl =user.coverPic;
      let profileUrl = user.profilePic;

      coverUrl = cover != null && (await upload(cover));
      profileUrl = profile !=null && (await upload(profile));

      mutation.mutate({...texts,coverUrl, profilePic:profileUrl })
      setOpenUpdate(false)
    };
     

  return (
    <div className='update absolute top-0 bottom-0 left-0 right-0 m-auto 
    w-[50%] h-[50%] bg-white z-[999]'>
        <form action="">
            <input type="file"   className='border'/>
            <input type="file"  />
            <input type="text" name="name"  onChange={handleChange} className='border'/>
            <input type="text" name="city"  onChange={handleChange} className='border'/>
            <input type="text" name="website"  onChange={handleChange} className='border'/>
            <button onClick={handleClick}>Update</button>
        </form>

        <button onClick={()=> setOpenUpdate(false)}>X</button>
        </div>
  )
}

export default Update