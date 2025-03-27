"use client"

import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import "./Auth.css"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [formError, setFormError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const { login, error } = useContext(AuthContext)
  const navigate = useNavigate()

  const { email, password } = formData

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    if (!email || !password) {
      setFormError("Please fill in all fields")
      return
    }

    setIsLoading(true)
    setFormError("")

    const success = await login(formData)

    setIsLoading(false)

    if (success) {
      navigate("/")
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login to Your Account</h2>

        {(formError || error) && <div className="error-message">{formError || error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="auth-button" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login

