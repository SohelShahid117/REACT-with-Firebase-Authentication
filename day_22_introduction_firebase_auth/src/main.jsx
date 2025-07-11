import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Registration from "./pages/Registration.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { AuthProvider } from "./context/AuthState.jsx";
import PrivateRoute from "./routers/PrivateRoute.jsx";
import Blogs from "./pages/Blogs.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import UpdateProfile from "./pages/UpdateProfile.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/blogs"
          element={
            <PrivateRoute>
              <Blogs />
            </PrivateRoute>
          }
        />
        <Route
          path="/userProfile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/updateUserProfile"
          element={
            <PrivateRoute>
              <UpdateProfile />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
