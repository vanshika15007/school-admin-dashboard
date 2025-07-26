import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Dashboard = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
      <p className="text-gray-700 mb-6">You're successfully logged in!</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
