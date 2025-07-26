// src/components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header className="h-16 bg-white shadow-md flex items-center px-6 justify-between ml-64">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="text-gray-600">Admin User</div>
    </header>
  );
}
