import { useEffect, useState } from "react";
import { BACK_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  // const [feed, setfeed] = useState([]);
  const userFeed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const getfeed = async () => {
    try {
      if (userFeed) return;
      const user = await axios.get(BACK_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(user.data.data));
      // setfeed(user.data.data);
    } catch (err) {
      throw new Error("Feed Error" + err.message);
    }
  };

  useEffect(() => {
    getfeed();
  }, []);
  if (!userFeed) return;
  if (userFeed.length === 0) {
    return (
      <div>
      <h1 className="font-bold text-2xl text-center my-8">
        That's enough for Today 🚫!
      </h1> 
      <h2 className="font-bold text-2xl text-center my-8">Now Go & Study📖</h2>
      </div>
      
    );
  }

  // console.log(feed);
  console.log(userFeed);

  return (
    <div className="flex justify-center p-1 my-2 items-center">
      {userFeed.length > 0 && <UserCard user={userFeed[0]} />}
    </div>
  );
};
export default Feed;
