"use client"

import { useState, useEffect } from "react"
import "./SymptomSearch.css"

const SymptomSearch = ({
  symptoms,
  onSelectSymptom,
  selectedSymptoms,
  isLoading,
  activeCategory,
  onCategoryChange,
  onSearchSubmit,
}) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredSymptoms, setFilteredSymptoms] = useState([])

  const categories = [
    { id: "all", name: "All" },
    { id: "respiratory", name: "Respiratory" },
    { id: "digestive", name: "Digestive" },
    { id: "cardiovascular", name: "Cardiovascular" },
    { id: "neurological", name: "Neurological" },
    { id: "musculoskeletal", name: "Musculoskeletal" },
    { id: "skin", name: "Skin" },
    { id: "general", name: "General" },
    { id: "urinary", name: "Urinary" },
    { id: "reproductive", name: "Reproductive" },
    { id: "mental", name: "Mental Health" },
  ]

  // Filter symptoms based on search term and category
  useEffect(() => {
    if (!symptoms || symptoms.length === 0) {
      setFilteredSymptoms([])
      return
    }

    let filtered = [...symptoms]

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((symptom) => symptom.categories && symptom.categories.includes(activeCategory))
    }

    // Filter by search term
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((symptom) => symptom.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    setFilteredSymptoms(filtered)
  }, [symptoms, searchTerm, activeCategory])

  // Check if a symptom is already selected
  const isSymptomSelected = (symptomId) => {
    return selectedSymptoms.some((s) => (s._id || s.id) === (symptomId._id || symptomId.id))
  }

const handleSearchSubmit = async (e) => {
  e.preventDefault()
  if (searchTerm.trim()) {
    try {
      const response = await fetch(`/api/symptoms/search/${searchTerm}`)
      const data = await response.json()
      onSearchSubmit(data)
    } catch (error) {
      console.error("Error fetching symptoms:", error)
    }
  }
}


  return (
    <div className="symptom-search">
      <form onSubmit={handleSearchSubmit} className="search-input-container">
        <input
          type="text"
          placeholder="Enter your symptoms (e.g., 'headache and fever')"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          aria-label="Search symptoms"
        />
        <button type="submit" className="search-button" aria-label="Search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        {searchTerm && (
          <button type="button" className="clear-search" onClick={() => setSearchTerm("")} aria-label="Clear search">
            ×
          </button>
        )}
      </form>

      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-tab ${activeCategory === category.id ? "active" : ""}`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="loading-symptoms">
          <div className="spinner"></div>
          <p>Loading symptoms...</p>
        </div>
      ) : (
        <div className="symptoms-list">
          {filteredSymptoms.length === 0 ? (
            <div className="no-symptoms-found">
              {searchTerm ? `No symptoms found matching "${searchTerm}"` : "No symptoms available in this category"}
            </div>
          ) : (
            filteredSymptoms.map((symptom) => (
              <div
                key={symptom._id || symptom.id}
                className={`symptom-item ${isSymptomSelected(symptom) ? "selected" : ""}`}
                onClick={() => onSelectSymptom(symptom)}
              >
                <span className="symptom-name">{symptom.name}</span>
                {symptom.isEmergency && (
                  <span className="emergency-badge" title="Emergency symptom">
                    ⚠️
                  </span>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default SymptomSearch
