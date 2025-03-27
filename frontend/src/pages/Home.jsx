"use client"

import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import "./Home.css"

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext)

  const healthArticles = [
    {
      id: 1,
      title: "Understanding Common Cold Symptoms",
      excerpt: "Learn how to differentiate between cold, flu, and allergies based on your symptoms.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Managing Chronic Pain",
      excerpt: "Effective strategies for managing chronic pain and improving quality of life.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Mental Health Awareness",
      excerpt: "Recognizing the signs of anxiety and depression and when to seek help.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const commonSymptoms = [
    { id: 1, name: "Headache", count: 1245 },
    { id: 2, name: "Fever", count: 987 },
    { id: 3, name: "Cough", count: 876 },
    { id: 4, name: "Fatigue", count: 765 },
    { id: 5, name: "Sore Throat", count: 654 },
    { id: 6, name: "Nausea", count: 543 },
  ]

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Advanced Symptom Checker</h1>
          <p>Identify potential health conditions based on your symptoms</p>

          {isAuthenticated ? (
            <Link to="/symptom-checker" className="cta-button">
              Check Your Symptoms
            </Link>
          ) : (
            <Link to="/signup" className="cta-button">
              Get Started
            </Link>
          )}
        </div>
      </section>

      <section className="features-section container">
        <h2>How It Works</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">1</div>
            <h3>Enter Your Symptoms</h3>
            <p>Select from our comprehensive list of symptoms or describe them in your own words.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">2</div>
            <h3>Get Analysis</h3>
            <p>Our system analyzes your symptoms and identifies potential conditions.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">3</div>
            <h3>Review Results</h3>
            <p>Review detailed information about possible conditions and recommended next steps.</p>
          </div>
        </div>
      </section>

      <section className="articles-section container">
        <h2>Health Articles</h2>

        <div className="articles-grid">
          {healthArticles.map((article) => (
            <div className="article-card" key={article.id}>
              <img src={article.image || "/placeholder.svg"} alt={article.title} className="article-image" />
              <div className="article-content">
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <a href="#" className="read-more">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="common-symptoms-section container">
        <h2>Common Symptom Searches</h2>

        <div className="common-symptoms-grid">
          {commonSymptoms.map((symptom) => (
            <div className="symptom-card" key={symptom.id}>
              <h3>{symptom.name}</h3>
              <p>{symptom.count} searches</p>
              <Link to={isAuthenticated ? "/symptom-checker" : "/login"} className="check-symptom-btn">
                Check This Symptom
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Take Control of Your Health</h2>
          <p>Create an account to track your symptoms and get personalized health insights.</p>

          {isAuthenticated ? (
            <Link to="/symptom-checker" className="cta-button">
              Check Your Symptoms
            </Link>
          ) : (
            <Link to="/signup" className="cta-button">
              Sign Up Now
            </Link>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home

