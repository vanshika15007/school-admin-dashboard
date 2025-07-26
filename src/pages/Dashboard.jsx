import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { messaging } from "../firebase";
import StudentCard from "../components/StudentCard";
import TeacherCard from "../components/TeacherCard";

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");
  const [loggedOut, setLoggedOut] = useState(false);

  // Request notification permission and handle foreground messages
  useEffect(() => {
    if (window.Notification && Notification.permission !== "granted") {
      Notification.requestPermission();
    }
    // Listen for foreground messages
    if (messaging) {
      import("firebase/messaging").then(({ onMessage }) => {
        onMessage(messaging, (payload) => {
          toast.info(
            `Notification: ${payload.notification?.title || ""} - ${payload.notification?.body || ""}`
          );
        });
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedOut(true);
    setTimeout(() => {
      setLoggedOut(false);
      navigate("/"); // Redirect to login page
    }, 2000);
  };

  const handleSendNotification = async () => {
    // This is a demo: show a toast and, if possible, a browser notification
    toast.success("Demo notification sent!");
    if (window.Notification && Notification.permission === "granted") {
      new Notification("Demo Notification", {
        body: "This is a test push notification!",
        icon: "/icon-192.png",
      });
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case "students": {
        // Example data, replace with real API data in full-stack version
        const students = [
          { name: "Aman Sharma", email: "aman@example.com", status: "Active", avatar: "" },
          { name: "Priya Singh", email: "priya@example.com", status: "Inactive", avatar: "" },
          { name: "Rahul Verma", email: "rahul@example.com", status: "Active", avatar: "" },
        ];
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Students</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {students.map((student, idx) => (
                <StudentCard key={idx} student={student} />
              ))}
            </div>
          </div>
        );
      }
      case "teachers": {
        // Example data, replace with real API data in full-stack version
        const teachers = [
          { name: "Sunita Mehra", email: "sunita@example.com", subject: "Mathematics", avatar: "" },
          { name: "Vikram Patel", email: "vikram@example.com", subject: "Science", avatar: "" },
          { name: "Anjali Rao", email: "anjali@example.com", subject: "English", avatar: "" },
        ];
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Teachers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachers.map((teacher, idx) => (
                <TeacherCard key={idx} teacher={teacher} />
              ))}
            </div>
          </div>
        );
      }
      case "classes": {
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Classes</h2>
            <div className="bg-white rounded-lg shadow-md p-6 text-center text-xl text-gray-700">
              🏫 Classes Overview (Static Placeholder)
            </div>
          </div>
        );
      }
      default: {
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
    }
  };

  if (loggedOut) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-10 rounded-xl shadow-md text-center">
          <h1 className="text-3xl font-bold text-green-600 mb-2">You are logged out</h1>
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }

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
          <button
            onClick={handleSendNotification}
            className="mt-4 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition"
          >
            Send Notification
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
