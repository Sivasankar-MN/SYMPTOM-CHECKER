"use client"

import { useState } from "react"
import { getSeverityLevel } from "../utils/symptomUtils"
import "./ConditionCard.css"

const ConditionCard = ({ condition }) => {
  const [expanded, setExpanded] = useState(false)

  const severityLevel = getSeverityLevel(condition.probability)

  return (
    <div className={`condition-card severity-${severityLevel}`}>
      <div className="condition-header">
        <h3>{condition.name}</h3>
        <div className="probability-container">
          <div className="probability-bar">
            <div className="probability-fill" style={{ width: `${condition.probability}%` }}></div>
          </div>
          <span className="probability-text">{condition.probability}% match</span>
        </div>
      </div>

      <p className="condition-description">{condition.description}</p>

      <button className="toggle-details-btn" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show Less" : "Show More"}
      </button>

      {expanded && (
        <div className="condition-details">
          {condition.recommendations && condition.recommendations.length > 0 && (
            <div className="recommendations">
              <h4>Recommendations:</h4>
              <ul>
                {condition.recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="learn-more">
            <h4>Learn More:</h4>
            <p>
              Always consult with a healthcare professional for proper diagnosis and treatment. The information provided
              is for educational purposes only.
            </p>
            <a href="#" className="learn-more-link">
              Read more about {condition.name}
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default ConditionCard

