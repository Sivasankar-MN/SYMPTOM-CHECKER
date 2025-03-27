"use client"

import { useState } from "react"
import { isEmergencySymptom } from "../utils/symptomUtils"
import "./SymptomCard.css"

const SymptomCard = ({ symptom, onSelect, isSelected }) => {
  const [showDetails, setShowDetails] = useState(false)

  const isEmergency = isEmergencySymptom(symptom)

  const handleClick = () => {
    if (!isSelected) {
      onSelect(symptom)
    }
  }

  const toggleDetails = (e) => {
    e.stopPropagation()
    setShowDetails(!showDetails)
  }

  return (
    <div
      className={`symptom-card ${isSelected ? "selected" : ""} ${isEmergency ? "emergency" : ""}`}
      onClick={handleClick}
    >
      <div className="symptom-card-header">
        <h3>{symptom.name}</h3>
        <button className="info-button" onClick={toggleDetails}>
          {showDetails ? "−" : "ⓘ"}
        </button>
      </div>

      {showDetails && (
        <div className="symptom-details">
          {symptom.description && <p className="symptom-description">{symptom.description}</p>}

          {symptom.categories && symptom.categories.length > 0 && (
            <div className="symptom-categories">
              {symptom.categories.map((category, index) => (
                <span key={index} className="category-tag">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              ))}
            </div>
          )}

          {isEmergency && <p className="emergency-note">⚠️ This symptom may require immediate medical attention.</p>}
        </div>
      )}
    </div>
  )
}

export default SymptomCard

