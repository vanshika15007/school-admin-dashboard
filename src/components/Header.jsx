// src/components/Header.jsx
import React from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="h-16 bg-[var(--color-primary)] text-white shadow-lg flex items-center px-6 justify-between">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle (Visible on small screens) */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden p-2 -ml-2 rounded-md hover:bg-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
        >
          {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <h1 className="text-2xl font-bold tracking-wide">Dashboard</h1>
      </div>
      <div className="text-white opacity-90 font-medium">Admin User</div>
    </header>
  );
}
