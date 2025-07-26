import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./auth/AuthPage";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      {/* Root route shows the AuthPage (login/signup form) */}
      <Route path="/" element={<AuthPage />} />

      {/* Dashboard route (after login) */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
