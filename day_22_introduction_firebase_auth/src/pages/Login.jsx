import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import app from "../firebase/firebase.config";
import { NavLink, useNavigate } from "react-router";

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
      <div className="bg-white max-w-md shadow-md space-y-5 p-5  rounded-lg w-96 h-92 flex flex-col  justify-center">
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
          <button className="w-full px-6 py-3 text-white bg-blue-500 hover:bg-blue-700 mt-5 rounded-md">
            Login
          </button>
        </form>
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
