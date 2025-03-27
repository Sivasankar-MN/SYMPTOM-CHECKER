import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import SymptomChecker from "./pages/SymptomChecker"
import Results from "./pages/Results"
import Profile from "./pages/Profile"
import Footer from "./components/Footer"
import { AuthProvider } from "./context/AuthContext"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/symptom-checker"
                element={
                  <PrivateRoute>
                    <SymptomChecker />
                  </PrivateRoute>
                }
              />
              <Route
                path="/results"
                element={
                  <PrivateRoute>
                    <Results />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App

