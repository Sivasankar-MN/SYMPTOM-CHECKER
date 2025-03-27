"use client"

import { useState } from "react"
import "./HealthTips.css"

const HealthTips = ({ symptom }) => {
  const [activeTab, setActiveTab] = useState("precautions")

  if (!symptom) return null

  const { precautions = [], selfCareTips = [], preventionTips = [] } = symptom

  // If no tips are available, don't render the component
  if (precautions.length === 0 && selfCareTips.length === 0 && preventionTips.length === 0) {
    return null
  }

  return (
    <div className="health-tips-container">
      <h3>Health Tips for {symptom.name}</h3>

      <div className="tips-tabs">
        <button
          className={`tab-button ${activeTab === "precautions" ? "active" : ""}`}
          onClick={() => setActiveTab("precautions")}
        >
          Precautions
        </button>
        <button
          className={`tab-button ${activeTab === "selfCare" ? "active" : ""}`}
          onClick={() => setActiveTab("selfCare")}
        >
          Self-Care
        </button>
        <button
          className={`tab-button ${activeTab === "prevention" ? "active" : ""}`}
          onClick={() => setActiveTab("prevention")}
        >
          Prevention
        </button>
      </div>

      <div className="tips-content">
        {activeTab === "precautions" && (
          <div className="tips-list">
            <h4>Precautions to Take</h4>
            {precautions.length > 0 ? (
              <ul>
                {precautions.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            ) : (
              <p>No specific precautions available for this symptom.</p>
            )}
          </div>
        )}

        {activeTab === "selfCare" && (
          <div className="tips-list">
            <h4>Self-Care Tips</h4>
            {selfCareTips.length > 0 ? (
              <ul>
                {selfCareTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            ) : (
              <p>No specific self-care tips available for this symptom.</p>
            )}
          </div>
        )}

        {activeTab === "prevention" && (
          <div className="tips-list">
            <h4>Prevention Tips</h4>
            {preventionTips.length > 0 ? (
              <ul>
                {preventionTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            ) : (
              <p>No specific prevention tips available for this symptom.</p>
            )}
          </div>
        )}
      </div>

      {symptom.isEmergency && (
        <div className="emergency-tip-alert">
          <strong>⚠️ Important:</strong> This symptom may require immediate medical attention. {symptom.advice}
        </div>
      )}
    </div>
  )
}

export default HealthTips

