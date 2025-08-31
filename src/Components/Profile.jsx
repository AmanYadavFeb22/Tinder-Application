import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import UserCard from "./UserCard"

const Profile = () => {
  const loginUser = useSelector((store) => store.user);

  if (loginUser)
    return (
      <div className="flex justify-center items-center mt-2 mb-2">
        <EditProfile user={loginUser} />
      </div>
    );
};

export default Profile;
