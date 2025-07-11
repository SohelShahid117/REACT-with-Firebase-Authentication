import React from "react";
import { UseAuth } from "../context/AuthState";

const UserProfile = () => {
  const { currentUser } = UseAuth();
  console.log(currentUser);
  return (
    <div className="px-6 py-4 shadow-md bg-gray-50 rounded-md w-1/3 h-1/2 flex flex-col space-y-2 justify-center items-center mx-auto my-auto mt-12">
      <h1 className="text-xl font-bold">User Profile Card</h1>
      <h2>
        Welcome
        <span className="text-lg font-semibold ml-2">
          {currentUser.displayName}
        </span>
      </h2>
      <img className="rounded-full" src={currentUser.photoURL} alt="" />
      <h2>
        Email :
        <span className="text-lg font-semibold ml-2">{currentUser.email}</span>
      </h2>
      <h2>
        Email verified :
        <span className="text-lg font-semibold ml-2">
          {currentUser.emailVerified ? "Yes" : "No"}
        </span>
      </h2>
      <h2>
        user id :
        <span className="text-lg font-semibold ml-2">{currentUser.uid}</span>
      </h2>
    </div>
  );
};

export default UserProfile;
