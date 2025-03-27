"use client"

import { useState } from "react"
import "./HealthAdvice.css"

const HealthAdvice = ({ symptom }) => {
  const [activeTab, setActiveTab] = useState("advice")

  if (!symptom) return null

  const { name, advice, precautions = [], selfCareTips = [], preventionTips = [], isEmergency } = symptom

  const getSymptomImage = (symptomName) => {
    const symptomImages = {
      headache: "https://img.freepik.com/free-photo/woman-having-headache-migraine-pain_1150-14889.jpg",
      fever: "https://img.freepik.com/free-photo/sick-woman-bed-measuring-temperature_23-2148847188.jpg",
      cough: "https://img.freepik.com/free-photo/young-woman-with-cold-coughing_23-2148847186.jpg",
      "sore throat": "https://img.freepik.com/free-photo/sick-woman-touching-her-throat_23-2148847190.jpg",
      fatigue:
        "https://img.freepik.com/free-photo/tired-exhausted-young-businesswoman-sleeping-workplace-office_1262-16178.jpg",
      nausea: "https://img.freepik.com/free-photo/woman-feeling-nauseous-bathroom_23-2148847197.jpg",
      "chest pain": "https://img.freepik.com/free-photo/man-having-chest-pain-heart-attack_23-2148847199.jpg",
      "shortness of breath":
        "https://img.freepik.com/free-photo/young-woman-having-asthma-attack-home_23-2148847193.jpg",
      dizziness: "https://img.freepik.com/free-photo/woman-feeling-dizzy-holding-her-head_23-2148847195.jpg",
      rash: "https://img.freepik.com/free-photo/close-up-person-with-rash-skin_23-2148847201.jpg",
      "joint pain": "https://img.freepik.com/free-photo/man-with-joint-pain-knee_23-2148847203.jpg",
      "back pain": "https://img.freepik.com/free-photo/young-man-suffering-from-back-pain_23-2148847205.jpg",
      "abdominal pain": "https://img.freepik.com/free-photo/woman-having-stomachache-period-pain_23-2148847207.jpg",
      diarrhea: "https://img.freepik.com/free-photo/man-with-stomach-issues_23-2148847209.jpg",
      vomiting: "https://img.freepik.com/free-photo/sick-woman-bathroom_23-2148847211.jpg",
    }

    // Try to find an exact match
    if (symptomImages[symptomName.toLowerCase()]) {
      return symptomImages[symptomName.toLowerCase()]
    }

    // Try to find a partial match
    for (const [key, url] of Object.entries(symptomImages)) {
      if (symptomName.toLowerCase().includes(key)) {
        return url
      }
    }

    // Default image if no match found
    return "https://img.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg"
  }

  return (
    <div className="health-advice-container">
      <div className="health-advice-header">
        <div className="symptom-info">
          <h3>{name}</h3>
          {isEmergency && (
            <div className="emergency-tag">
              <span className="emergency-icon">⚠️</span>
              <span>Emergency Symptom</span>
            </div>
          )}
        </div>
        <div className="symptom-image">
          <img src={getSymptomImage(name) || "/placeholder.svg"} alt={`${name} illustration`} />
        </div>
      </div>

      <div className="health-advice-tabs">
        <button
          className={`advice-tab ${activeTab === "advice" ? "active" : ""}`}
          onClick={() => setActiveTab("advice")}
        >
          Medical Advice
        </button>
        <button
          className={`advice-tab ${activeTab === "precautions" ? "active" : ""}`}
          onClick={() => setActiveTab("precautions")}
        >
          Precautions
        </button>
        <button
          className={`advice-tab ${activeTab === "selfCare" ? "active" : ""}`}
          onClick={() => setActiveTab("selfCare")}
        >
          Self-Care
        </button>
        <button
          className={`advice-tab ${activeTab === "prevention" ? "active" : ""}`}
          onClick={() => setActiveTab("prevention")}
        >
          Prevention
        </button>
      </div>

      <div className="health-advice-content">
        {activeTab === "advice" && (
          <div className="advice-section">
            <p className="advice-text">{advice || "No specific medical advice available for this symptom."}</p>
            {isEmergency && (
              <div className="emergency-advice">
                <p>
                  <strong>IMPORTANT:</strong> This is considered an emergency symptom. Seek immediate medical attention
                  if you are experiencing this symptom.
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === "precautions" && (
          <div className="advice-section">
            <h4>Precautions to Take</h4>
            {precautions && precautions.length > 0 ? (
              <ul className="advice-list">
                {precautions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>No specific precautions available for this symptom.</p>
            )}
          </div>
        )}

        {activeTab === "selfCare" && (
          <div className="advice-section">
            <h4>Self-Care Tips</h4>
            {selfCareTips && selfCareTips.length > 0 ? (
              <ul className="advice-list">
                {selfCareTips.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>No specific self-care tips available for this symptom.</p>
            )}
          </div>
        )}

        {activeTab === "prevention" && (
          <div className="advice-section">
            <h4>Prevention Tips</h4>
            {preventionTips && preventionTips.length > 0 ? (
              <ul className="advice-list">
                {preventionTips.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>No specific prevention tips available for this symptom.</p>
            )}
          </div>
        )}
      </div>

      <div className="health-advice-disclaimer">
        <p>
          <strong>Disclaimer:</strong> This information is for educational purposes only and is not a substitute for
          professional medical advice. Always consult with a healthcare provider for diagnosis and treatment.
        </p>
      </div>
    </div>
  )
}

export default HealthAdvice

