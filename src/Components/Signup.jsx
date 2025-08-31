import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BACK_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setfirstName] = useState("");
  const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setage] = useState("");
  const [About, setAbout] = useState("");
  const [photoUrl, setphotoUrl] = useState("");
  const [Gender, setGender] = useState("");
  const [error, seterror] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async () => {
   try {
    
     const newUser = await axios.post(
      BACK_URL + "/signup",
      { firstName, lastName, age, Gender, photoUrl, About, emailId, password },
      { withCredentials: true }
    );
    console.log(newUser.data);
    dispatch(addUser(newUser.data.data));
    return navigate("/profile");



   } catch (error) {
    seterror(error.response.data)
    throw new Error('ERROR:' + error.message)
   }
  };



  return (
    <div className="flex justify-evenly my-8">
      <div className="card bg-base-300 w-72 mx-4 shadow-sm">
        <div className="card-body items-center text-center ">
          <h2 className="card-title mb-3">Signup</h2>
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
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input
              type="text"
              placeholder="Firstname"
              required
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value);
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
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input
              type="text"
              placeholder="Lastname"
              required
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
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
          <div className="validator-hint hidden">Enter valid email address</div>

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
              required
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </label>
          <input
            type="number"
            className="input validator"
            placeholder="Enter Your Age"
            value={age}
            onChange={(e) => {
              setage(e.target.value);
              console.log(age);
            }}
          />

          <input
            className="input validator"
            placeholder="Gender"
            value={Gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />

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
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </g>
            </svg>
            <input
              type="url"
              value={photoUrl}
              onChange={(e) => {
                setphotoUrl(e.target.value);
              }}
              placeholder="Enter Your Photourl"
            />
          </label>
          <textarea
            placeholder="Write About Yourself"
            className="textarea textarea-sm "
            value={About}
            onChange={(e) => {
              setAbout(e.target.value);
            }}
          ></textarea>
          <p className=" text-red-500 ">{error}</p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={handleSignup}>
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
