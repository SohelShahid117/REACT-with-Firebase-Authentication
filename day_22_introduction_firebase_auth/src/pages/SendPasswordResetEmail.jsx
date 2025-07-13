import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import app from "../firebase/firebase.config";

const SendPasswordResetEmail = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("aaaaaaa");
  const [isSuccess, setIsSuccess] = useState(false);
  console.log(email, message, isSuccess);
  const handlePasswordResetEmail = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("please enter your mail");
      setIsSuccess(false);
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email)
        .then(() => {
          setMessage("message sent");
          setIsSuccess(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
      setMessage("failed to sent password reset email");
      setIsSuccess(false);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 w-full">
      <div className="bg-white p-5 shadow rounded-lg w-1/3">
        <h2 className="text-xl text-center font-semibold">
          Reset Your Password
        </h2>
        {message && (
          <p
            className={`p-2 text-center ${
              isSuccess ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
        <form onSubmit={handlePasswordResetEmail}>
          <div>
            <label htmlFor="" className="font-bold mb-2">
              Email :
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block border border-blue-400 p-2 mt-1 rounded-lg w-full focus:ring-4 focus:ring-blue-500 focus:border-transparent focus:outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="enter your email"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white mt-4 w-full text-xl"
          >
            Send Reset Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendPasswordResetEmail;
