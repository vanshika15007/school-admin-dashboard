import React, { useState } from "react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "profile" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "password" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("password")}
        >
          Change Password
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "notifications"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("notifications")}
        >
          Notifications
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        {activeTab === "profile" && (
          <div>
            <label className="block mb-2 font-semibold">Admin Name</label>
            <input
              type="text"
              value="Admin User"
              className="w-full border px-3 py-2 rounded"
              disabled
            />
          </div>
        )}

        {activeTab === "password" && (
          <div>
            <label className="block mb-2 font-semibold">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full border px-3 py-2 rounded"
            />
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
              Update Password
            </button>
          </div>
        )}

        {activeTab === "notifications" && (
          <div>
            <label className="block mb-2 font-semibold">Email Alerts</label>
            <input type="checkbox" className="mr-2" defaultChecked /> Enable
            email alerts
            <br />
            <label className="block mt-4 mb-2 font-semibold">
              Push Notifications
            </label>
            <input type="checkbox" className="mr-2" /> Enable push notifications
          </div>
        )}
      </div>
    </div>
  );
}
