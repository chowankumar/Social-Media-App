 
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Share = () => {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newPost) => makeRequest.post("/posts", newPost),
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({ desc, img: imgUrl });
    setDesc("");
    setFile(null);
  };

  return (
    <div className="share shadow-lg w-[90%] mx-auto bg-white rounded-2xl mb-5">
      <div className="container p-5">
        <div className="top flex items-center justify-between">
          <div className="left flex items-center flex-3">
            <img src={"/upload/" + currentUser.profilePic} alt="" className="w-10 h-10 rounded-full object-cover"/>
            <input
              type="text"
              placeholder={`What's on your mind ${currentUser.name}?`}
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              className="border-none outline-none px-4 py-2 bg-transparent w-3/5 text-gray-700"
            />
          </div>
          <div className="right flex-1 flex justify-end">
            {file && (
              <img className="file w-24 h-24 object-cover" alt="" src={URL.createObjectURL(file)} />
            )}
          </div>
        </div>
        <hr className="my-5 border-t border-gray-300"/>
        <div className="bottom flex items-center justify-between">
          <div className="left flex items-center gap-5">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item flex items-center gap-2 cursor-pointer">
                <img src={Image} alt="" className="h-5"/>
                <span className="text-sm text-gray-500">Add Image</span>
              </div>
            </label>
            <div className="item flex items-center gap-2 cursor-pointer">
              <img src={Map} alt="" className="h-5"/>
              <span className="text-sm text-gray-500">Add Place</span>
            </div>
            <div className="item flex items-center gap-2 cursor-pointer">
              <img src={Friend} alt="" className="h-5"/>
              <span className="text-sm text-gray-500">Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button 
              onClick={handleClick} 
              className="border-none px-4 py-2 text-white cursor-pointer bg-blue-600 rounded-md">
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
