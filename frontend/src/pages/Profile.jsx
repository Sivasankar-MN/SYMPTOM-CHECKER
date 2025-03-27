"use client"

import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import "./Profile.css"

const Profile = () => {
  const { user, logout } = useContext(AuthContext)
  const [symptomHistory, setSymptomHistory] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [activeTab, setActiveTab] = useState("history")
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    age: "",
    gender: "",
    medicalConditions: "",
  })
  const [isEditing, setIsEditing] = useState(false)
  const [updateSuccess, setUpdateSuccess] = useState(false)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true)

        // In a real app, we would fetch this from the API
        // For demo purposes, we'll use mock data

        // Mock profile data
        setTimeout(() => {
          setProfileData({
            name: user?.name || "John Doe",
            email: user?.email || "john.doe@example.com",
            age: "35",
            gender: "Male",
            medicalConditions: "None",
          })

          // Mock symptom history
          setSymptomHistory([
            {
              id: 1,
              date: "2023-03-15T14:30:00Z",
              symptoms: ["Headache", "Fever", "Fatigue"],
              diagnosis: [
                { name: "Common Cold", probability: 75 },
                { name: "Influenza", probability: 60 },
              ],
            },
            {
              id: 2,
              date: "2023-02-28T10:15:00Z",
              symptoms: ["Cough", "Sore Throat"],
              diagnosis: [
                { name: "Pharyngitis", probability: 80 },
                { name: "Allergies", probability: 45 },
              ],
            },
          ])

          setIsLoading(false)
        }, 1000)
      } catch (err) {
        setError("Failed to load profile data. Please try again later.")
        setIsLoading(false)
      }
    }

    fetchUserData()
  }, [user])

  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    })
  }

  const handleProfileUpdate = async (e) => {
    e.preventDefault()

    try {
      setIsLoading(true)

      // In a real app, we would send this to the API
      // For demo purposes, we'll just simulate a successful update

      setTimeout(() => {
        setUpdateSuccess(true)
        setIsEditing(false)
        setIsLoading(false)

        // Clear success message after 3 seconds
        setTimeout(() => {
          setUpdateSuccess(false)
        }, 3000)
      }, 1000)
    } catch (err) {
      setError("Failed to update profile. Please try again later.")
      setIsLoading(false)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString() + " at " + date.toLocaleTimeString()
  }

  if (isLoading && !profileData.name) {
    return <div className="loading-container">Loading profile data...</div>
  }

  return (
    <div className="profile-container">
      <h1>My Profile</h1>

      {error && <div className="error-message">{error}</div>}
      {updateSuccess && <div className="success-message">Profile updated successfully!</div>}

      <div className="profile-tabs">
        <button
          className={`profile-tab ${activeTab === "history" ? "active" : ""}`}
          onClick={() => setActiveTab("history")}
        >
          Symptom History
        </button>
        <button
          className={`profile-tab ${activeTab === "settings" ? "active" : ""}`}
          onClick={() => setActiveTab("settings")}
        >
          Profile Settings
        </button>
      </div>

      <div className="profile-content">
        {activeTab === "history" ? (
          <div className="symptom-history">
            <h2>Your Symptom Check History</h2>

            {symptomHistory.length === 0 ? (
              <p className="no-history">You haven't checked any symptoms yet.</p>
            ) : (
              <div className="history-list">
                {symptomHistory.map((entry) => (
                  <div className="history-card" key={entry.id}>
                    <div className="history-header">
                      <h3>Symptom Check on {formatDate(entry.date)}</h3>
                    </div>

                    <div className="history-symptoms">
                      <h4>Symptoms:</h4>
                      <div className="symptom-tags">
                        {entry.symptoms.map((symptom, index) => (
                          <span className="symptom-tag" key={index}>
                            {symptom}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="history-diagnosis">
                      <h4>Potential Conditions:</h4>
                      <ul>
                        {entry.diagnosis.map((condition, index) => (
                          <li key={index}>
                            <span className="condition-name">{condition.name}</span>
                            <span className="condition-probability">({condition.probability}% match)</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="history-actions">
                      <button className="view-details-btn">View Full Details</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="profile-settings">
            <h2>Profile Settings</h2>

            <form onSubmit={handleProfileUpdate}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={profileData.age}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>

              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={profileData.gender}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="medicalConditions">Existing Medical Conditions</label>
                <textarea
                  id="medicalConditions"
                  name="medicalConditions"
                  value={profileData.medicalConditions}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  rows="4"
                  placeholder="List any existing medical conditions..."
                ></textarea>
              </div>

              <div className="profile-actions">
                {isEditing ? (
                  <>
                    <button type="submit" className="save-btn" disabled={isLoading}>
                      {isLoading ? "Saving..." : "Save Changes"}
                    </button>
                    <button type="button" className="cancel-btn" onClick={() => setIsEditing(false)}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <button type="button" className="edit-btn" onClick={() => setIsEditing(true)}>
                    Edit Profile
                  </button>
                )}
              </div>
            </form>

            <div className="account-actions">
              <h3>Account Actions</h3>
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
              <button className="delete-account-btn">Delete Account</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile

