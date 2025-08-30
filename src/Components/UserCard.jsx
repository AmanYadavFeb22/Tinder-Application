import axios from "axios";
import { BACK_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { deleteFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const dispatch=useDispatch()
  const { firstName, lastName, About, age, Gender, photoUrl,_id } = user;

  const handleSendreq = async (status, userId) => {
    try {
      const sendReq = await axios.post(
        BACK_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );

      dispatch(deleteFeed(_id))


    } catch (error) {
      throw new Error("ERROR:" + error.message);
    }
  };

  return (
    <div className="card bg-base-200 w-64  shadow-sm">
      <figure>
        <img className="rounded-2xl w-60 p-2" src={photoUrl} alt="user img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && Gender && <p>{age + " | " + Gender}</p>}
        <p>{About}</p>
        <div className="card-actions justify-between mt-1">
          <button className="btn btn-primary text-sm font-bold" onClick={()=>handleSendreq("Interested",_id)}>
            Interested
          </button>
          <button className="btn btn-primary text-sm font-bold bg-amber-300"onClick={()=>handleSendreq("Ignored",_id)}>
            Ignored
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
