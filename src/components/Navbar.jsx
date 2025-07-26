import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-indigo-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🏫 School Admin</h1>
      <button
        onClick={handleLogout}
        className="bg-white text-indigo-600 px-4 py-2 rounded"
      >
        Logout
      </button>
    </nav>
  );
}
