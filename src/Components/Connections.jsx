import axios from "axios";
import { BACK_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addConnection } from "../utils/connectionSlice";
import ConnectionCard from "./ConnectionCard";
import { useSelector } from "react-redux";

const Connection = () => {
  const connections = useSelector((store) => store.connection);
  const dispatch = useDispatch();

  const getConnections = async () => {
    try {
      const user = await axios.get(BACK_URL + "/user/connections", {
        withCredentials: true,
      });
     
      dispatch(addConnection(user?.data?.data));
    } catch (error) {
      throw new Error("ERROR:" + error.message);
    }
  };
  useEffect(() => {
    getConnections();
  }, []);

  if(!connections) return

  if(connections.length===0){
    return  <h1 className="font-bold text-2xl text-center my-8">No Connection Found</h1>
  }

  return (
    <div className="flex justify-center text-center">
      <div>
        <h1 className="font-bold text-2xl my-8">Your Connection🤝</h1>
        {connections.map((con=>{
            return  <ConnectionCard user={con}/>
        }))   }

      </div>
    </div>
  );
};

export default Connection;
