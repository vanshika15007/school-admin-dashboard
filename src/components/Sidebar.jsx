// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-blue-900 text-white fixed">
      <div className="p-4 font-bold text-xl border-b border-blue-700">
        Admin Panel
      </div>
      <nav className="mt-4 flex flex-col gap-2 p-4">
        <Link to="/dashboard" className="hover:bg-blue-700 p-2 rounded">
          Dashboard
        </Link>
        <Link to="/students" className="hover:bg-blue-700 p-2 rounded">
          Students
        </Link>
        <Link to="/teachers" className="hover:bg-blue-700 p-2 rounded">
          Teachers
        </Link>
        <Link to="/classes" className="hover:bg-blue-700 p-2 rounded">
          Classes
        </Link>
      </nav>
    </aside>
  );
}
