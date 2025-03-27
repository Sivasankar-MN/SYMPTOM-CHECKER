"use client"

import "./EmergencyAlert.css"

const EmergencyAlert = ({ message, onClose }) => {
  return (
    <div className="emergency-alert">
      <div className="emergency-icon">⚠️</div>
      <div className="emergency-content">
        <h3>Emergency Medical Advice</h3>
        <p>
          {message ||
            "SEEK IMMEDIATE MEDICAL ATTENTION. This could indicate a serious condition requiring urgent care."}
        </p>
        <div className="emergency-actions">
          <a href="tel:911" className="call-emergency-btn">
            Call 911
          </a>
          <button className="dismiss-btn" onClick={onClose}>
            I Understand
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmergencyAlert

