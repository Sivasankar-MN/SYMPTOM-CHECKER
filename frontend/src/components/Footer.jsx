import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>SymptomChecker</h3>
          <p>Your health companion for identifying potential conditions based on symptoms.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/symptom-checker">Check Symptoms</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Disclaimer</h3>
          <p>
            This tool is for informational purposes only and is not a substitute for professional medical advice,
            diagnosis, or treatment.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SymptomChecker. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

