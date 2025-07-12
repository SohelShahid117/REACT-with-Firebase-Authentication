import { NavLink } from "react-router";
import "./App.css";
import LogOut from "./pages/LogOut";
import OnAuthStateChange from "./pages/OnAuthStateChange";
// import { AuthProvider } from "./context/AuthState";

function App() {
  return (
    <>
      <div className="w-2/3 mt-28  bg-gray-50 p-28 items-center justify-center mx-auto my-auto">
        <nav>
          <ul className="flex items-center justify-center space-x-5 mt-5">
            <li>
              <NavLink
                to="/registration"
                className="px-6 py-2 bg-blue-500 hover:bg-blue-700 cursor-pointer rounded-md text-white text-xl"
              >
                Registration
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="px-6 py-2 bg-blue-500  hover:bg-blue-700 cursor-pointer rounded-md text-white text-xl"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className="px-6 py-2 bg-blue-500  hover:bg-blue-700 cursor-pointer rounded-md text-white text-xl"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/userProfile"
                className="px-6 py-2 bg-blue-500  hover:bg-blue-700 cursor-pointer rounded-md text-white text-xl"
              >
                UserProfile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/updatePassword"
                className="px-6 py-2 bg-blue-500  hover:bg-blue-700 cursor-pointer rounded-md text-white text-xl"
              >
                Update Password
              </NavLink>
            </li>
          </ul>
        </nav>
        <LogOut />
        {/* <OnAuthStateChange /> */}
      </div>
    </>
  );
}

export default App;
