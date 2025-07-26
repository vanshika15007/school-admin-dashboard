import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, signup } from "../firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // New state for password visibility
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (isLogin) {
        await login(email, password);
        navigate("/dashboard");
      } else {
        await signup(email, password);
        setIsLogin(true);
        setError("Signup successful! Please login.");
      }
    } catch (err) {
      if (isLogin) {
        setError("Invalid email or password. Please try again or sign up.");
      } else {
        setError("Signup failed. Email may already be in use.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[var(--color-background)] to-[var(--color-secondary)] p-4">
      <div className="bg-[var(--color-surface)] p-8 rounded-2xl shadow-2xl w-full max-w-md border border-[var(--color-border)] transform transition-transform duration-300 hover:scale-[1.01]">
        <h2 className="text-3xl font-bold mb-6 text-center text-[var(--color-primary)]">
          {isLogin ? "Welcome Back!" : "Create Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && <div className="text-red-600 text-sm text-center bg-red-100 p-2 rounded-md border border-red-300">{error}</div>}
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-[var(--color-border)] px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition placeholder-[var(--color-text-light)] text-[var(--color-text-dark)]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border border-[var(--color-border)] px-4 py-3 rounded-lg pr-12 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition placeholder-[var(--color-text-light)] text-[var(--color-text-dark)]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-[var(--color-text-light)] hover:text-[var(--color-primary)] focus:outline-none transition"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--color-primary)] text-white py-3 rounded-lg hover:bg-[var(--color-secondary)] transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg tracking-wide"
            disabled={loading}
          >
            {loading ? (isLogin ? "Logging in..." : "Signing up...") : (isLogin ? "Login" : "Sign Up")}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[var(--color-text-light)]">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
            }}
            className="text-[var(--color-primary)] hover:underline font-semibold"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
