import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice"
import { Link, useNavigate } from "react-router-dom";
import { BACK_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState("");
  const[error,seterror]=useState()
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleLogin = async () => {
    try {
         const user = await axios.post(BACK_URL +  "/login", {
      emailId,
      password,
    },{withCredentials:true});
    dispatch(addUser(user.data.data))
    navigate('/feed')
    
    } catch (error) {
      seterror(error.response.data)
        throw new Error("Invalid Credentials" + error.response.data)
    }
   
  };

  return (
    <div className="flex justify-center items-center h-80  mb-2">
      <div className="card bg-base-300 w-96 shadow-sm ">
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-2xl">Login</h2>
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="mail@gmail.com"
              required
              value={emailId}
              onChange={(e) => {
                setemailId(e.target.value);
              }}
            />
          </label>
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </label>
          
          <p className="text-red-400">{error}</p>
          <p>New User? <span className="font-bold hover:underline cursor-pointer"> <Link to="/signup">Signup Here</Link></span></p>
          <div className="card-actions">
            <button className="btn btn-primary mt-2 " onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
