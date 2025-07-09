import React from "react";
import { UseAuth } from "../context/AuthState";

const Dashboard = () => {
  const { currentUser } = UseAuth();
  console.log(currentUser);
  return <div>Dashboard</div>;
};

export default Dashboard;
