import "./LoadingSpinner.css"

const LoadingSpinner = ({ size = "medium", message = "Loading..." }) => {
  return (
    <div className="loading-container">
      <div className={`spinner ${size}`}></div>
      {message && <p className="loading-message">{message}</p>}
    </div>
  )
}

export default LoadingSpinner

