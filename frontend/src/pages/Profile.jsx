import React, { useContext, useState } from 'react';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
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
import { AuthContext } from '../context/authContext';
import Update from '../components/Update';

const Profile = () => {

  const [openUpdate,setOpenUpdate] = useState(false);


  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
  const userId = parseInt(location.pathname.split("/")[2]);

  const { isLoading: isUserLoading, error: userError, data: userData } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => makeRequest.get("/users/find/" + userId).then((res) => res.data),
  });

  const { data: relationshipData } = useQuery({
    queryKey: ["relationship", userId],
    queryFn: () => makeRequest.get("/relationships?followedUserId=" + userId).then((res) => res.data),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (isFollowing) => {
      if (isFollowing) {
        return makeRequest.delete("/relationships?userId=" + userId);
      } else {
        return makeRequest.post("/relationships", { userId });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["relationship", userId]);
    },
  });

  const handleFollow = () => {
    const isFollowing = relationshipData.some(rel => rel.followerUserId === currentUser.id);
    mutation.mutate(isFollowing);
  };

  if (isUserLoading) return <div>Loading...</div>;
  if (userError) return <div>Error loading profile</div>;

  const isFollowing = relationshipData.some(rel => rel.followerUserId === currentUser.id);

  return (
    <>
    <div className='profile'>
      <div className='images p-4'>
        <img src={userData.coverPic} className='w-[100%] h-[350px] rounded-lg relative' alt="Profile background" />
        {userData.profilePic && (
          <img
            src={userData.profilePic}
            alt="Profile"
            className='rounded-full absolute top-[350px] m-auto left-12 right-1 w-[200px] h-[200px]'
          />
        )}
      </div>

      <div className="profileInfo flex items-center boxShadow h-[250px] bg-white w-[95%] p-4 rounded-lg m-auto mb-4">

        <div className="w-[30%] flex items-center justify-center gap-4">
          <a href="#"><FacebookTwoToneIcon className='text-[#0866ff]' /></a>
          <a href="#"><InstagramIcon className='text-[#0866ff]' /></a>
          <a href="#"><TwitterIcon className='text-[#0866ff]'/></a>
          <a href="#"><LinkedInIcon className='text-[#0866ff]'/></a>
          
        </div>

        <div className="middle w-[50%] flex flex-col gap-4 mt-[80px]">
          <span className='m-auto font-bold text-[30px]'>{userData.name}</span>
          <div className='flex justify-around items-center'>

            <div className='flex items-center gap-1 text-[15px]'>
              <PlaceIcon  className='text-[#0866ff]'/>
              <span>{userData.city}</span>
            </div>
            <div className='flex items-center gap-1 text-[15px]'>
              <LanguageIcon className='text-[#0866ff]' />
              <span>{userData.website}</span>
            </div>
          </div>

          {userId === currentUser.id ? (
            <button className='bg-[#0866ff] font-medium w-fit py-1 px-3 m-auto text-white rounded-lg' onClick={()=> setOpenUpdate(true)}>Update</button>
          ) : (
            <button className='bg-blue-700 w-fit py-1 px-3 m-auto text-white rounded-lg' onClick={handleFollow}>
              {isFollowing ? "Following" : "Follow"}
            </button>
          )}
        </div>

        <div className="right flex justify-end w-[20%]">
          <a href="#"><EmailOutlinedIcon className='text-[#0866ff]' /></a>
          <a href="#"><MoreVertIcon  className='text-[#0866ff]'/></a>
        </div>
      </div>
      <Posts userId={userId} />
    </div>
   {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={userData}/>} 
    </>
  );
};

export default Profile;
