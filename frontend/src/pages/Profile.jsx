import React, { useContext } from 'react';
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../components/Posts";
import { makeRequest } from '../axios';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Profile = () => {

  const {currentUser} = useContext(AuthContext);
    
  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => makeRequest.get("/users/find/" + userId).then((res) => res.data),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile</div>;


  const {data:relationshipData} = useQuery({
    queryKey: ["relationship"],
    queryFn: () => makeRequest.get("/relationships/followedUserId=" + userId).then((res) => res.data),
  });


  const handleFollow =()=>{
    
  }

  return (
    <div className='profile'>
      <div className='images p-4'>
        <img src={data.coverPic} className='w-[100%] h-[350px] rounded-sm relative' alt="Profile background" />
        {data && data.profilePic && (
          <img
            src={data.profilePic}
            alt="Profile"
            className='rounded-full absolute top-[350px] m-auto left-0 right-32 w-[200px] h-[200px]'
          />
        )}
      </div>

      <div className="profileInfo flex items-center boxShadow h-[250px] bg-white w-[90%] p-4 rounded-lg m-auto mb-4">
        <div className="flex-1 flex gap-4">
          <a href=""><FacebookTwoToneIcon /></a>
          <a href=""><InstagramIcon /></a>
          <a href=""><TwitterIcon /></a>
          <a href=""><LinkedInIcon /></a>
          <a href=""><PinterestIcon /></a>
        </div>

        {data && (
          <div className="middle flex-1 flex flex-col gap-4 mt-[80px]">
            <span className='m-auto font-bold text-[30px]'>{data.name}</span>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-1 text-[15px]'>
                <PlaceIcon />
                <span>{data.city}</span>
              </div>
              <div className='flex items-center gap-1 text-[15px]'>
                <LanguageIcon />
                <span>{data.website}</span>
              </div>
            </div>

           {
            userId === currentUser.id ? ( <button className='bg-blue-700 w-fit py-1 px-3 m-auto text-white rounded-lg'>update</button>): <button className='bg-blue-700 w-fit py-1 px-3 m-auto text-white rounded-lg' onClick={handleFollow}>Follow</button>
           }
          </div>
        )}

        <div className="right flex justify-end flex-1">
          <a href=""><EmailOutlinedIcon /></a>
          <a href=""><MoreVertIcon /></a>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Profile;
