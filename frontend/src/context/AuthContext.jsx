"use client"

import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Check if user is logged in on page load
    const checkLoggedIn = async () => {
      try {
        const token = localStorage.getItem("token")

        if (token) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
          const res = await axios.get("http://localhost:5000/api/auth/user")

          setUser(res.data)
          setIsAuthenticated(true)
        }
      } catch (err) {
        localStorage.removeItem("token")
        delete axios.defaults.headers.common["Authorization"]
      }

      setLoading(false)
    }

    checkLoggedIn()
  }, [])

  // Register user
  const register = async (userData) => {
    try {
      setError(null)
      const res = await axios.post("http://localhost:5000/api/auth/register", userData)

      localStorage.setItem("token", res.data.token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`

      setUser(res.data.user)
      setIsAuthenticated(true)
      return true
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed")
      return false
    }
  }

  // Login user
  const login = async (userData) => {
    try {
      setError(null)
      const res = await axios.post("http://localhost:5000/api/auth/login", userData)

      localStorage.setItem("token", res.data.token)
      axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`

      setUser(res.data.user)
      setIsAuthenticated(true)
      return true
    } catch (err) {
      setError(err.response?.data?.message || "Login failed")
      return false
    }
  }

  // Logout user
  const logout = () => {
    localStorage.removeItem("token")
    delete axios.defaults.headers.common["Authorization"]
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        error,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

