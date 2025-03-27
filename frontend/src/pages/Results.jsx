"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Results.css"

const Results = () => {
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    // In a real app, we would fetch this from the API
    // For demo purposes, we'll get it from localStorage
    const storedResults = localStorage.getItem("symptomResults")

    if (storedResults) {
      try {
        setResults(JSON.parse(storedResults))
      } catch (err) {
        setError("Failed to load results. Please try again.")
      }
    } else {
      // Mock data for demo
      setResults({
        conditions: [
          {
            id: 1,
            name: "Common Cold",
            probability: 85,
            description:
              "A viral infection of the upper respiratory tract. Common symptoms include runny nose, sore throat, cough, and fever.",
            recommendations: [
              "Rest and stay hydrated",
              "Over-the-counter cold medications may help relieve symptoms",
              "Use a humidifier to ease congestion",
              "Consult a doctor if symptoms worsen or last more than 10 days",
            ],
          },
          {
            id: 2,
            name: "Seasonal Allergies",
            probability: 65,
            description: "An allergic response to seasonal allergens like pollen, causing symptoms similar to a cold.",
            recommendations: [
              "Over-the-counter antihistamines",
              "Avoid known allergens when possible",
              "Use air purifiers indoors",
              "Consult an allergist for persistent symptoms",
            ],
          },
          {
            id: 3,
            name: "Influenza (Flu)",
            probability: 40,
            description:
              "A viral infection that attacks your respiratory system. The flu is more severe than the common cold.",
            recommendations: [
              "Rest and stay hydrated",
              "Take fever-reducing medications if needed",
              "Antiviral medications may be prescribed if diagnosed early",
              "Seek medical attention if symptoms are severe or you're in a high-risk group",
            ],
          },
        ],
        symptoms: [
          { id: 3, name: "Cough" },
          { id: 4, name: "Sore Throat" },
          { id: 2, name: "Fever" },
        ],
        emergencyAdvice: null,
        timestamp: new Date().toISOString(),
      })
    }

    setLoading(false)
  }, [])

  if (loading) {
    return <div className="loading-container">Loading results...</div>
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
        <Link to="/symptom-checker" className="back-button">
          Back to Symptom Checker
        </Link>
      </div>
    )
  }

  if (!results) {
    return (
      <div className="error-container">
        <p>No results found. Please check your symptoms again.</p>
        <Link to="/symptom-checker" className="back-button">
          Back to Symptom Checker
        </Link>
      </div>
    )
  }

  const { conditions, symptoms, emergencyAdvice, timestamp } = results
  const formattedDate = new Date(timestamp).toLocaleString()

  return (
    <div className="results-container">
      <h1>Symptom Analysis Results</h1>
      <p className="results-timestamp">Analysis completed on {formattedDate}</p>

      {emergencyAdvice && (
        <div className="emergency-advice">
          <h2>⚠️ Emergency Advice</h2>
          <p>{emergencyAdvice}</p>
        </div>
      )}

      <div className="results-section">
        <h2>Symptoms Analyzed</h2>
        <div className="symptoms-list">
          {symptoms.map((symptom) => (
            <div className="symptom-tag" key={symptom.id}>
              {symptom.name}
            </div>
          ))}
        </div>
      </div>

      <div className="results-section">
        <h2>Potential Conditions</h2>
        <div className="disclaimer">
          <p>
            <strong>Disclaimer:</strong> This analysis is for informational purposes only and is not a substitute for
            professional medical advice. Always consult with a healthcare provider for proper diagnosis and treatment.
          </p>
        </div>

        <div className="conditions-list">
          {conditions.map((condition) => (
            <div className="condition-card" key={condition.id}>
              <div className="condition-header">
                <h3>{condition.name}</h3>
                <div className="probability-indicator">
                  <div className="probability-bar" style={{ width: `${condition.probability}%` }}></div>
                  <span className="probability-text">{condition.probability}% match</span>
                </div>
              </div>

              <p className="condition-description">{condition.description}</p>

              <div className="recommendations">
                <h4>Recommendations:</h4>
                <ul>
                  {condition.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="results-actions">
        <Link to="/symptom-checker" className="back-button">
          Check Different Symptoms
        </Link>
        <button className="save-button">Save Results to Profile</button>
      </div>

      <div className="healthcare-providers">
        <h2>Nearby Healthcare Providers</h2>
        <p>Based on your location, here are some healthcare providers you may consider consulting:</p>

        <div className="providers-list">
          <div className="provider-card">
            <h3>City Medical Center</h3>
            <p>General Practice, Family Medicine</p>
            <p>123 Main Street, Cityville</p>
            <p>Phone: (123) 456-7890</p>
            <a href="#" className="provider-link">
              Visit Website
            </a>
          </div>

          <div className="provider-card">
            <h3>Wellness Clinic</h3>
            <p>Internal Medicine, Urgent Care</p>
            <p>456 Health Avenue, Cityville</p>
            <p>Phone: (123) 456-7891</p>
            <a href="#" className="provider-link">
              Visit Website
            </a>
          </div>

          <div className="provider-card">
            <h3>Community Hospital</h3>
            <p>Emergency Services, Specialized Care</p>
            <p>789 Hospital Road, Cityville</p>
            <p>Phone: (123) 456-7892</p>
            <a href="#" className="provider-link">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results

