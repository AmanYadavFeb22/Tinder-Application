import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BACK_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setfirstName] = useState(user.firstName);
  const [lastName, setlastName] = useState(user.lastName);
  const [emailId, setemailId] = useState(user.emailId);
  const [age, setage] = useState(user.age);
  const [About, setAbout] = useState(user.About);
  const [photoUrl, setphotoUrl] = useState(user.photoUrl);
  const [Gender, setGender] = useState(user.Gender);
  const [error, seterror] = useState("");
  const [toast, settoast] = useState(false);
  const dispatch = useDispatch();

  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        "http://localhost:3000/profile/edit",
        { firstName, lastName, Gender, age, photoUrl, About },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      {
        firstName &&
          lastName &&
          age &&
          About &&
          photoUrl &&
          Gender &&
          settoast(true);
      }
      setTimeout(() => {
        settoast(false);
      }, 2000);
    } 

    catch (err) {
      throw new Error("Error " + err.message);
    }
  };

  return (
    <div className="flex justify-evenly">
      <div className="card bg-base-300 w-72 mx-4 shadow-sm">
        <div className="card-body items-center text-center h-[450px] ">
          <h2 className="card-title">Edit Profile</h2>
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
            <input type="email" placeholder={emailId} required />
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
          <select
            defaultValue="Choose Your Gender"
            className="select"
            value={Gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>

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
          <p>{error}</p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={saveProfile}>
              Submit Profile
            </button>
          </div>
        </div>
      </div>
      <UserCard user={{ firstName, lastName, About, age, Gender, photoUrl }} />
      {toast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-info">
            <span>Profile Edited Successfully</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
