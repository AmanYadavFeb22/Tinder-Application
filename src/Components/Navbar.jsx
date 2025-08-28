import { useDispatch, useSelector } from "react-redux";
import { BACK_URL } from "../utils/constants";
import { deleteUser } from "../utils/userSlice";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await axios.post(BACK_URL + "/logout", {}, { withCredentials: true });
      dispatch(deleteUser());
        navigate("/login");
      
    } catch (error) {
      throw new Error("Error logging out" + error.message);
    }
  };

  return (
    <>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Tinder🔥
          </Link>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          {!userData ? (
            <p className="flex justify-center items-center">Welcome People</p>
          ) : (
            <p className="flex justify-center items-center">
              Welcome, {userData.firstName}
            </p>
          )}
          <div className="dropdown dropdown-end mx-2.5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full bg-gray-200">
                {!userData ? (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://cdn-icons-png.freepik.com/512/21/21104.png"
                  />
                ) : (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={userData.photoUrl}
                  />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>

              <li>
                <a>Settings</a>
              </li>
              <li onClick={handleLogout}>
                <a href="/login">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
