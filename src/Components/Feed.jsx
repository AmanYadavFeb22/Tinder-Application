import { useEffect, useState } from "react";
import { BACK_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";


const Feed = () => {
    const[feed,setfeed]=useState([])
  const userFeed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const getfeed = async () => {
    try {
        if(userFeed) return
      const user = await axios.get(BACK_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(user.data.data));
      setfeed(user.data.data)
    } catch (err) {
      throw new Error("Feed Error" + err.message);
    }
  };

  useEffect(() => {
    getfeed();

  }, []);

 
  return (
     <div className="flex justify-center p-1 my-2 items-cente"> 
     {feed.length>0 &&(
      <UserCard user={feed[0]}/>
    )}
</div>
   
  );
};
export default Feed;
