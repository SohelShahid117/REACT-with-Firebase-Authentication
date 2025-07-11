import React, { useState } from "react";
import { UseAuth } from "../context/AuthState";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { Navigate, useNavigate } from "react-router";

const UpdateProfile = () => {
  const auth = getAuth(app);
  const { currentUser } = UseAuth();
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log("hi");
    console.log(name, img);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: img,
    })
      .then(() => {
        alert("update successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="px-6 py-4 shadow-md bg-gray-50 rounded-md w-1/3 h-1/2 flex flex-col space-y-2 justify-center items-center mx-auto my-auto mt-12">
      <h1 className="text-xl font-bold">Update User Profile</h1>
      <h2>
        Welcome
        <span className="text-lg font-semibold ml-2">
          {currentUser?.displayName}
        </span>
      </h2>
      <img className="rounded-full" src={currentUser?.photoURL} alt="" />
      <h2>
        Email :
        <span className="text-lg font-semibold ml-2">{currentUser.email}</span>
      </h2>
      <h2>
        Email verified :
        <span className="text-lg font-semibold ml-2">
          {currentUser?.emailVerified ? "Yes" : "No"}
        </span>
      </h2>
      <h2>
        user id :
        <span className="text-lg font-semibold ml-2">{currentUser.uid}</span>
      </h2>

      {/* update user profile form */}

      <form onSubmit={handleUpdateProfile} className=" shadow-xl p-14 bg-white">
        <div className="space-y-2">
          <label className="block">Set Display Name</label>
          <input
            value={name}
            onChange={(e) =>
              setName(e.target.value || currentUser?.displayName)
            }
            type="text"
            name="name"
            id="name"
            placeholder="update your name"
            className="border p-2 rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <label className="block">Set New Image</label>
          <input
            value={img}
            onChange={(e) =>
              setImg(currentUser ? currentUser.photoURL : e.target.value)
            }
            type="text"
            name="photoURL"
            id="photoURL"
            placeholder="update photoURL"
            className="border p-2 rounded-lg"
          />
        </div>
        <button
          className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-2xl text-white rounded-lg mt-5"
          type="submit"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
