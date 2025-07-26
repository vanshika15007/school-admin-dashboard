import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.info("Logged out successfully!");
    navigate("/signin");
  };

  const renderSection = () => {
    switch (activeSection) {
      case "students":
        return <p className="text-xl">👨‍🎓 Students Data (Static Placeholder)</p>;
      case "teachers":
        return <p className="text-xl">👩‍🏫 Teachers Data (Static Placeholder)</p>;
      case "classes":
        return (
          <p className="text-xl">🏫 Classes Overview (Static Placeholder)</p>
        );
      default:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white shadow rounded p-5 text-center">
              <h2 className="text-xl font-semibold text-gray-700">
                👨‍🎓 Total Students
              </h2>
              <p className="text-2xl font-bold text-blue-600 mt-2">1200</p>
            </div>
            <div className="bg-white shadow rounded p-5 text-center">
              <h2 className="text-xl font-semibold text-gray-700">
                👩‍🏫 Teachers
              </h2>
              <p className="text-2xl font-bold text-green-600 mt-2">80</p>
            </div>
            <div className="bg-white shadow rounded p-5 text-center">
              <h2 className="text-xl font-semibold text-gray-700">
                🏫 Classes
              </h2>
              <p className="text-2xl font-bold text-yellow-600 mt-2">30</p>
            </div>
            <div className="bg-white shadow rounded p-5 text-center">
              <h2 className="text-xl font-semibold text-gray-700">
                📅 Attendance
              </h2>
              <p className="text-2xl font-bold text-red-500 mt-2">92%</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-4">
        <h2 className="text-2xl font-bold mb-6">📋 Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <button
            className={`text-left px-3 py-2 rounded hover:bg-blue-100 ${
              activeSection === "home" ? "bg-blue-200" : ""
            }`}
            onClick={() => setActiveSection("home")}
          >
            Home
          </button>
          <button
            className={`text-left px-3 py-2 rounded hover:bg-blue-100 ${
              activeSection === "students" ? "bg-blue-200" : ""
            }`}
            onClick={() => setActiveSection("students")}
          >
            Students
          </button>
          <button
            className={`text-left px-3 py-2 rounded hover:bg-blue-100 ${
              activeSection === "teachers" ? "bg-blue-200" : ""
            }`}
            onClick={() => setActiveSection("teachers")}
          >
            Teachers
          </button>
          <button
            className={`text-left px-3 py-2 rounded hover:bg-blue-100 ${
              activeSection === "classes" ? "bg-blue-200" : ""
            }`}
            onClick={() => setActiveSection("classes")}
          >
            Classes
          </button>
          <button
            onClick={handleLogout}
            className="text-left mt-6 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
        </h1>
        {renderSection()}
      </div>
    </div>
  );
}
