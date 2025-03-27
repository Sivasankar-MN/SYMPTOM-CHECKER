const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")

// Load environment variables
dotenv.config()

// Initialize express app
const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/SymptomChecker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err))

// Import routes
const authRoutes = require("./routes/auth")
const symptomRoutes = require("./routes/symptoms")
const analysisRoutes = require("./routes/analysis")
const userRoutes = require("./routes/users")

// Use routes
app.use("/api/auth", authRoutes)
app.use("/api/symptoms", symptomRoutes)
app.use("/api/analysis", analysisRoutes)
app.use("/api/users", userRoutes)

// Root route
app.get("/", (req, res) => {
  res.send("Symptom Checker API is running")
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: "Server error", error: err.message })
})

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

