import { getAuth, updatePassword } from "firebase/auth";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import app from "../firebase/firebase.config";
import { useNavigate } from "react-router";

const UpdatePassword = () => {
  const [message, setMessage] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const auth = getAuth(app);
  const user = auth.currentUser;
  console.log(user);
  // const newPassword = getASecureRandomPassword();

  const navigate = useNavigate();

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();

    console.log("update PW");
    console.log(newPassword, confirmPassword);

    if (newPassword !== confirmPassword) {
      setMessage("password don't match");
      return;
    }

    if (newPassword.length < 6) {
      setMessage("password should b 6 characters");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("password don't match");
      return;
    }
    // if (newPassword == confirmPassword) {
    //   setMessage("successfully");
    //   return;
    // }
    if (user) {
      console.log("hello");
      try {
        await updatePassword(user, newPassword)
          .then(() => {
            console.log("Update successful.");
            alert("Update successful");
            setMessage("update success");
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setMessage("failed to update password");
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      setMessage("No authenticated user found");
      alert("please login");
      navigate("/login");
    }
  };
  return (
    <div className="flex  items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white py-10 px-5 shadow-md rounded w-1/3">
        <h2 className="text-xl font-bold text-center mb-5">Update Password</h2>
        {message && (
          <p
            className={`p-2 text-center ${
              message.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
        <form onSubmit={handlePasswordUpdate}>
          <div className="relative">
            <label className="block mb-2 text-lg" htmlFor="">
              New Password
            </label>
            <input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full rounded-md border-2 px-2 py-1"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="enter new password"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 bottom-2.5 px-2 cursor-pointer"
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-900" />
              ) : (
                <FaEye className="text-gray-900" />
              )}
            </div>
          </div>
          <div className="relative">
            <label className="block my-2 text-lg" htmlFor="">
              Confirm Password
            </label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-md border-2 px-2 py-1"
              type={showPassword2 ? "text" : "password"}
              name="confirm_password"
              id="confirm_password"
              placeholder="confirm password"
            />
            <div
              onClick={() => setShowPassword2(!showPassword2)}
              className="absolute right-0 bottom-2.5 px-2 cursor-pointer"
            >
              {showPassword2 ? (
                <FaEyeSlash className="text-gray-900" />
              ) : (
                <FaEye className="text-gray-900" />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded text-xl mt-2 w-full rounded-lg"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
