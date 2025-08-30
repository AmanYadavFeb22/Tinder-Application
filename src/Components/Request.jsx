import { useDispatch, useSelector } from "react-redux";
import { BACK_URL } from "../utils/constants";
import { addRequest } from "../utils/requestSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import ConnectionCard from "./ConnectionCard";

const Request = () => {
  const[showbtn,setshowbtn]=useState(false)
  const requestReceive = useSelector((store) => store.request);
  const dispatch = useDispatch();
  const getRequests = async () => {
    try {
      const request = await axios.get(BACK_URL + "/user/request/received", {
        withCredentials: true,
      });
      console.log(request.data.data);
      dispatch(addRequest(request.data.data));
      
    } catch (error) {
      throw new Error("Error:" + error.message);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);
 
  if(!requestReceive) return
  if(requestReceive.length===0){
    return  <h1 className="font-bold text-2xl text-center my-8">No Connection Request Found</h1>
  }

console.log(requestReceive[0].fromUserId)
console.log(requestReceive[0]._id)

  return (
    <div className="flex justify-center text-center">
      <div>
        <h1 className="font-bold text-2xl my-8">Your Connection🤝</h1>
        {requestReceive.map((req=>{
            return  <ConnectionCard user={req.fromUserId} id={req._id} showbtn={()=>setshowbtn(true)} />

        
        }))   }

      </div>
    </div>
  );
};

export default Request;
