import axios from "axios"

// Create an axios instance with base URL
const api = axios.create({
  baseURL: "http://localhost:5000/api",
})

// Add request interceptor to add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Add response interceptor to handle common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized errors (token expired or invalid)
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token")
      window.location.href = "/login"
    }
    return Promise.reject(error)
  },
)

// Auth API calls
export const registerUser = async (userData) => {
  return await api.post("/auth/register", userData)
}

export const loginUser = async (userData) => {
  return await api.post("/auth/login", userData)
}

export const getCurrentUser = async () => {
  return await api.get("/auth/user")
}

// Symptoms API calls
export const getSymptoms = async () => {
  return await api.get("/symptoms")
}

export const getSymptomsByCategory = async (category) => {
  return await api.get(`/symptoms/category/${category}`)
}

// Analysis API calls
export const analyzeSymptoms = async (symptoms) => {
  return await api.post("/analysis", { symptoms })
}

export const getSymptomHistory = async () => {
  return await api.get("/analysis/history")
}

export const getSymptomCheckById = async (id) => {
  return await api.get(`/analysis/${id}`)
}

// User profile API calls
export const getUserProfile = async () => {
  return await api.get("/users/profile")
}

export const updateUserProfile = async (profileData) => {
  return await api.put("/users/profile", profileData)
}

export const deleteUserAccount = async () => {
  return await api.delete("/users")
}

export default api

