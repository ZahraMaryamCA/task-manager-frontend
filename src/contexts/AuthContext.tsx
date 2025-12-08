import React, { createContext, useContext, useState, ReactNode } from "react";

const AuthContext = createContext<any>(null);

const API_BASE = "http://localhost:5000/api";  // your backend URL

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  // -------------------------------
  // REGISTER USER (real backend)
  // -------------------------------
  const register = async (name: string, email: string, password: string) => {
    try {
      const res = await fetch(`${API_BASE}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || data.error || "Registration failed");
      }

      // Backend returns: { message: "User registered successfully" }
      return { success: true, message: data.message };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  // -------------------------------
  // LOGIN USER (real backend)
  // -------------------------------
  const login = async (email: string, password: string) => {
    try {
      const res = await fetch(`${API_BASE}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || data.error || "Login failed");
      }

      // Backend returns: { message: "Login successful", token }
      if (!data.token) {
        throw new Error("No token received from server");
      }

      // Save token to localStorage
      localStorage.setItem("token", data.token);

      // Store user info in context (we don't get user name from login, so use email prefix)
      setUser({ name: email.split("@")[0], email });

      return { success: true, message: data.message };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  // -------------------------------
  // LOGOUT USER
  // -------------------------------
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  // -------------------------------
  // CHECK IF USER IS LOGGED IN
  // -------------------------------
  const isAuthenticated = () => !!user || !!localStorage.getItem("token");

  return (
    <AuthContext.Provider value={{ user, register, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
