import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { messaging } from "../firebase";
import { getToken } from "firebase/messaging"; // Import getToken
import StudentCard from "../components/StudentCard";
import TeacherCard from "../components/TeacherCard";
import ClassCard from "../components/ClassCard";
import Header from "../components/Header"; // Import Header component
// import { FiMenu, FiX } from "react-icons/fi"; // REMOVED: Icons moved to Header.jsx

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");
  const [loggedOut, setLoggedOut] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false); // New state for modal visibility
  const [selectedItem, setSelectedItem] = useState(null); // New state for item details in modal
  const [fcmToken, setFcmToken] = useState(null); // New state for FCM token
  const [sidebarOpen, setSidebarOpen] = useState(false); // New state for sidebar visibility

  // Request notification permission and handle foreground messages
  useEffect(() => {
    if (window.Notification && Notification.permission !== "granted") {
      Notification.requestPermission();
    }

    // Get FCM token
    const getDeviceToken = async () => {
      try {
        const currentToken = await getToken(messaging, { vapidKey: 'YOUR_PUBLIC_VAPID_KEY' }); // Replace with your VAPID key
        if (currentToken) {
          console.log('FCM Device Token:', currentToken);
          setFcmToken(currentToken);
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      } catch (error) {
        console.error('An error occurred while retrieving token:', error);
      }
    };
    getDeviceToken();

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
    if (!fcmToken) {
      toast.error("FCM token not available. Please grant notification permission.");
      console.error("FCM token not available.");
      return;
    }

    // This is a DEMO ONLY. In a real app, send this from your backend server.
    const serverKey = 'YOUR_FIREBASE_SERVER_KEY'; // REPLACE WITH YOUR ACTUAL SERVER KEY

    try {
      const response = await fetch('https://fcm.googleapis.com/fcm/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `key=${serverKey}`,
        },
        body: JSON.stringify({
          to: fcmToken,
          notification: {
            title: 'Admin Dashboard Notification',
            body: 'This is a test notification from the admin dashboard!',
            icon: '/icon-192.png',
          },
          data: {
            // Custom data if needed
            type: 'test_notification',
            id: '123',
          },
        }),
      });

      if (response.ok) {
        toast.success("Push notification sent successfully!");
        console.log("Push notification sent successfully.");
      } else {
        const errorData = await response.json();
        toast.error(`Failed to send notification: ${errorData.message || response.statusText}`);
        console.error("Failed to send push notification:", errorData);
      }
    } catch (error) {
      toast.error("Error sending notification.");
      console.error("Error sending push notification:", error);
    }
  };

  // New function to handle viewing details
  const handleViewDetails = (item, type) => {
    setSelectedItem({ ...item, type }); // Store item and its type
    setShowDetailModal(true);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "students": {
        // Example data, replace with real API data in full-stack version
        const students = [
          { id: 1, name: "Aman Sharma", email: "aman@example.com", status: "Active", avatar: "", age: 16, grade: "10th", address: "123 Main St", phone: "555-1234" },
          { id: 2, name: "Priya Singh", email: "priya@example.com", status: "Inactive", avatar: "", age: 15, grade: "9th", address: "456 Oak Ave", phone: "555-5678" },
          { id: 3, name: "Rahul Verma", email: "rahul@example.com", status: "Active", avatar: "", age: 17, grade: "11th", address: "789 Pine Ln", phone: "555-9012" },
        ];
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((student) => (
              <StudentCard key={student.id} student={student} onViewDetails={handleViewDetails} />
            ))}
          </div>
        );
      }
      case "teachers": {
        // Example data, replace with real API data in full-stack version
        const teachers = [
          { id: 1, name: "Sunita Mehra", email: "sunita@example.com", subject: "Mathematics", avatar: "", department: "Science", experience: "10 years", phone: "555-0001" },
          { id: 2, name: "Vikram Patel", email: "vikram@example.com", subject: "Science", avatar: "", department: "Science", experience: "8 years", phone: "555-0002" },
          { id: 3, name: "Anjali Rao", email: "anjali@example.com", subject: "English", avatar: "", department: "Arts", experience: "5 years", phone: "555-0003" },
        ];
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} onViewDetails={handleViewDetails} />
            ))}
          </div>
        );
      }
      case "classes": {
        const classes = [
          { id: 1, name: "Mathematics", description: "Algebra and Geometry", status: "Active", studentsEnrolled: 30, teacher: "Sunita Mehra", schedule: "Mon, Wed, Fri" },
          { id: 2, name: "Science", description: "Physics and Chemistry", status: "Active", studentsEnrolled: 25, teacher: "Vikram Patel", schedule: "Tue, Thu" },
          { id: 3, name: "History", description: "World History Overview", status: "Inactive", studentsEnrolled: 15, teacher: "Anjali Rao", schedule: "Mon, Tue" },
        ];
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((classInfo) => (
              <ClassCard key={classInfo.id} classInfo={classInfo} onViewDetails={handleViewDetails} />
            ))}
          </div>
        );
      }
      default: {
        const attendancePercentage = 92; // Dynamic value for attendance
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[var(--color-primary)] text-white shadow-lg rounded-lg p-5 text-center transform hover:scale-105 transition-transform duration-200 cursor-pointer">
              <h2 className="text-xl font-semibold">👨‍🎓 Total Students</h2>
              <p className="text-3xl font-bold mt-2">1200</p>
            </div>
            <div className="bg-[var(--color-accent-green)] text-white shadow-lg rounded-lg p-5 text-center transform hover:scale-105 transition-transform duration-200 cursor-pointer">
              <h2 className="text-xl font-semibold">👩‍🏫 Teachers</h2>
              <p className="text-3xl font-bold mt-2">80</p>
            </div>
            <div className="bg-[var(--color-accent-orange)] text-white shadow-lg rounded-lg p-5 text-center transform hover:scale-105 transition-transform duration-200 cursor-pointer">
              <h2 className="text-xl font-semibold">🏫 Classes</h2>
              <p className="text-3xl font-bold mt-2">30</p>
            </div>
            <div className="bg-[var(--color-accent-red)] text-white shadow-lg rounded-lg p-5 text-center transform hover:scale-105 transition-transform duration-200 cursor-pointer">
              <h2 className="text-xl font-semibold">📅 Attendance</h2>
              <p className="text-3xl font-bold mt-2">{attendancePercentage}%</p>
              <div className="w-full bg-white bg-opacity-30 rounded-full h-2.5 mt-2">
                <div className="bg-white h-2.5 rounded-full" style={{ width: `${attendancePercentage}%` }}></div>
              </div>
            </div>
          </div>
        );
      }
    }
  };

  if (loggedOut) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[var(--color-background)] p-4">
        <div className="bg-[var(--color-surface)] p-10 rounded-xl shadow-2xl text-center border border-[var(--color-border)]">
          <h1 className="text-4xl font-extrabold text-[var(--color-primary)] mb-3 animate-pulse">You are logged out</h1>
          <p className="text-[var(--color-text-light)] text-lg">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> {/* Pass props to Header */}

      {/* Mobile Menu Toggle - REMOVED from here, moved to Header.jsx */}
      {/*
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-[var(--color-primary)] text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
      >
        {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      */}

      <div className="flex flex-1 relative">
        {/* Sidebar Overlay for Mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 w-64 bg-[var(--color-surface)] shadow-xl p-6 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-50`}>
          <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)]">📋 Admin Panel</h2>
          <nav className="flex flex-col gap-3">
            <button
              className={`text-left px-4 py-2 rounded-lg transition-colors duration-200 ${activeSection === "home" ? "bg-[var(--color-primary)] text-white shadow-md" : "text-[var(--color-text-dark)] hover:bg-gray-100"}`}
              onClick={() => { setActiveSection("home"); setSidebarOpen(false); }}
            >
              Home
            </button>
            <button
              className={`text-left px-4 py-2 rounded-lg transition-colors duration-200 ${activeSection === "students" ? "bg-[var(--color-primary)] text-white shadow-md" : "text-[var(--color-text-dark)] hover:bg-gray-100"}`}
              onClick={() => { setActiveSection("students"); setSidebarOpen(false); }}
            >
              Students
            </button>
            <button
              className={`text-left px-4 py-2 rounded-lg transition-colors duration-200 ${activeSection === "teachers" ? "bg-[var(--color-primary)] text-white shadow-md" : "text-[var(--color-text-dark)] hover:bg-gray-100"}`}
              onClick={() => { setActiveSection("teachers"); setSidebarOpen(false); }}
            >
              Teachers
            </button>
            <button
              className={`text-left px-4 py-2 rounded-lg transition-colors duration-200 ${activeSection === "classes" ? "bg-[var(--color-primary)] text-white shadow-md" : "text-[var(--color-text-dark)] hover:bg-gray-100"}`}
              onClick={() => { setActiveSection("classes"); setSidebarOpen(false); }}
            >
              Classes
            </button>
            <button
              onClick={() => { handleLogout(); setSidebarOpen(false); }}
              className="text-left mt-8 bg-[var(--color-accent-red)] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition shadow-md"
            >
              Logout
            </button>
            <button
              onClick={() => { handleSendNotification(); setSidebarOpen(false); }}
              className="mt-3 bg-[var(--color-secondary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color-primary)] transition shadow-md"
            >
              Send Notification
            </button>
          </nav>
        </div>

        {/* Main Content (adjusts for sidebar) */}
        <main className="flex-1 p-8 overflow-auto lg:ml-64">
          <h1 className="text-3xl font-bold text-[var(--color-text-dark)] mb-6 capitalize">
            {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
          </h1>
          {renderSection()}
        </main>
      </div>

      {/* Generic Detail Modal */}
      {showDetailModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-[var(--color-surface)] p-8 rounded-xl shadow-2xl max-w-lg w-full transform transition-all duration-300 scale-100 opacity-100">
            <h2 className="text-2xl font-bold mb-4 capitalize text-[var(--color-primary)]">
              {selectedItem?.type} Details
            </h2>
            {selectedItem && (
              <div className="space-y-3 text-[var(--color-text-dark)]">
                {Object.entries(selectedItem).map(([key, value]) => (
                  (key !== 'type' && key !== 'avatar') && (
                    <p key={key} className="flex justify-between items-center py-1 border-b border-[var(--color-border)] last:border-b-0">
                      <span className="font-semibold capitalize text-[var(--color-text-light)]">{key.replace(/([A-Z])/g, ' $1')}:</span> 
                      <span className="font-medium text-[var(--color-text-dark)]">{value.toString()}</span>
                    </p>
                  )
                ))}
              </div>
            )}
            <button
              onClick={() => setShowDetailModal(false)}
              className="mt-8 bg-[var(--color-accent-red)] text-white px-5 py-2 rounded-lg hover:bg-red-700 transition shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
