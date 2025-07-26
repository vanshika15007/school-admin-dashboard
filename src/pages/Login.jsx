import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
      returnSecureToken: true,
    };

    try {
      const res = await axios.post(
        `/accounts:signInWithPassword?key=AIzaSyCAdYChl-HxaF0nTJ501oATm2Rg2rC_uAI`,
        payload,
      );
      localStorage.setItem("token", res.data.idToken);
      navigate("/");
    } catch (err) {
      alert("Invalid credentials");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
