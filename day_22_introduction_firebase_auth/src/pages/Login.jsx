import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import app from "../firebase/firebase.config";
import { NavLink, useNavigate } from "react-router";

import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(auth);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        alert("login success");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setErr("invalid email or password");
        console.log("error is", error, errorCode, errorMessage);
      });
  };
  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      <div className="bg-white max-w-xl shadow-md space-y-5 p-5  rounded-lg  h-auto flex flex-col  justify-center">
        <h1 className="text-xl font-bold text-center -mb-2">Login Please</h1>
        <form onSubmit={handleLogin} className="">
          <div className="flex flex-col space-y-1">
            <label>Email : </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="enter your email"
              className="ml-2 focus:ring-amber-400 focus:ring-4 focus:border-none border-2 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col space-y-1 mt-2">
            <label>Password : </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="enter your password"
              className="ml-2 focus:ring-amber-400 focus:ring-4 focus:border-none border-2 p-2 rounded-md"
            />
          </div>
          {err && <p className="text-red-500 italic mt-5">{err}</p>}
          <button className="w-full px-6 py-3 text-white bg-blue-500 hover:bg-blue-700 mt-5 rounded-md text-xl font-bold">
            Login
          </button>
        </form>
        <div className="text-center">
          <p className="mb-2">Or Login With : </p>
          <div className="flex gap-5">
            <button className="flex px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-md items-center text-xl cursor-pointer">
              <FaGoogle />
              <span className="text-2xl font-semibold ml-2 mb-0.5">Google</span>
            </button>
            <button className="flex px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md items-center text-xl cursor-pointer">
              <FaFacebook />
              <span className="text-2xl font-semibold ml-2 mb-0.5">Google</span>
            </button>
            <button className="flex px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-md items-center text-xl cursor-pointer">
              <FaGithub />
              <span className="text-2xl font-semibold ml-2 mb-0.5">Google</span>
            </button>
          </div>
        </div>
        <p className="mb-5 text-center">
          You have no account? go to
          <NavLink
            to="/registration"
            className="text-green-500 font-bold text-xl ml-1"
          >
            Registration
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
