import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import { BACK_URL, DUMMY_IMG } from "../utils/constants";
import { useState } from "react";
import axios from "axios";
import { removeRequest } from "../utils/requestSlice";

const ConnectionCard = ({ user, showbtn, id }) => {
  const dispatch=useDispatch()
  const { firstName, lastName, age, Gender, About, photoUrl } = user;

  const reviewRequest = async (status, _id) => {
    try {
      const rev = await axios.post(
        BACK_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(id))


    } catch (error) {
      throw new Error("ERROR:" + error.message);
    }
  };

  return (
    <div className="flex justify-evenly items-center w-96 m-2 p-2 bg-emerald-950 rounded-xl">
      <div className="h-28 w-24 flex justify-between">
        <img className="rounded-2xl p-2 m-2" src={photoUrl || DUMMY_IMG}></img>
      </div>
      <div className="">
        <h1 className="font-bold">{firstName + " " + lastName}</h1>
        {age && Gender && <p>{age + "|" + Gender}</p>}
        <p>{About}</p>
      </div>
      {showbtn && (
        <div>
          <button className="btn btn-primary text-sm m-1 font-bold " onClick={()=>reviewRequest("accepted" ,id)}>
            Accept
          </button>
          <button className="btn btn-primary text-sm font-bold bg-amber-300 " onClick={()=>reviewRequest("rejected",id)}>
            Reject
          </button>
        </div>
      )}
    </div>
  );
};
export default ConnectionCard;
