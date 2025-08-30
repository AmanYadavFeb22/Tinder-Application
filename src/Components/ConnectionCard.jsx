import { useSelector } from "react-redux";
import UserCard from "./UserCard";

const ConnectionCard = ({ user }) => {
  console.log(user);
  const { firstName, lastName, age, Gender, About, photoUrl } = user;

  return (
    <div className="flex justify-evenly items-center w-96 m-2 p-2 bg-emerald-950 rounded-xl">
      <div className="h-28 w-24 flex justify-between">
        <img className="rounded-2xl p-2 m-2" src={photoUrl}></img>
      </div>
      <div className="">
        <h1 className="font-bold">{firstName + " " + lastName}</h1>
        {age && Gender && <p>{age + "|" + Gender}</p>}
        <p>{About}</p>
      </div>
    </div>
  );
};
export default ConnectionCard;
