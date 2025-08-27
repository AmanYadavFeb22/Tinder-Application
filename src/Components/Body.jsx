import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { BACK_URL } from "../utils/constants";
import { useEffect } from "react";
import axios from "axios";
import { addUser } from "../utils/userSlice";

const Body = () => {
  const userData = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const fetchUser = async () => {
    const data = await axios.get(BACK_URL + "/profile/view", {
      withCredentials: true,
    });
    console.log(data.data);
    dispatch(addUser(data.data));
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
