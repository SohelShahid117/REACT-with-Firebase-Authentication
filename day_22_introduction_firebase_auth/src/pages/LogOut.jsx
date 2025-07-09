import React from "react";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useNavigate } from "react-router";

const auth = getAuth(app);

const LogOut = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    console.log(e);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("logout success");
        navigate("/registration");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="m-5 mx-auto px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-md font-bold"
      >
        Logout
      </button>
    </div>
  );
};

export default LogOut;
