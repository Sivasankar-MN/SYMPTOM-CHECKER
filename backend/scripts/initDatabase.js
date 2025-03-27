const mongoose = require("mongoose")
const dotenv = require("dotenv")
const Symptom = require("../models/Symptom")
const { symptomDatabase, symptomCategories, emergencyConditions } = require("../data/symptomDatabase")

// Load environment variables
dotenv.config()

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/SymptomChecker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err))

// Function to initialize the symptoms database
const initializeSymptoms = async () => {
  try {
    // Clear existing symptoms
    await Symptom.deleteMany({})
    console.log("Cleared existing symptoms")

    // Create array of symptom objects
    const symptoms = []

    for (const [symptomName, symptomData] of Object.entries(symptomDatabase)) {
      // Determine categories for this symptom
      const categories = []

      for (const [category, keywords] of Object.entries(symptomCategories)) {
        if (keywords.some((keyword) => symptomName.toLowerCase().includes(keyword.toLowerCase()))) {
          categories.push(category)
        }
      }

      // Determine if it's an emergency symptom
      const isEmergency =
        emergencyConditions.includes(symptomName.toLowerCase()) ||
        (typeof symptomData === "string"
          ? symptomData.includes("SEEK IMMEDIATE MEDICAL ATTENTION") ||
            symptomData.includes("CALL 911") ||
            symptomData.includes("EMERGENCY")
          : symptomData.advice.includes("SEEK IMMEDIATE MEDICAL ATTENTION") ||
            symptomData.advice.includes("CALL 911") ||
            symptomData.advice.includes("EMERGENCY"))

      // Handle both string and object formats for backward compatibility
      const advice = typeof symptomData === "string" ? symptomData : symptomData.advice
      const precautions = typeof symptomData === "object" ? symptomData.precautions || [] : []
      const selfCareTips = typeof symptomData === "object" ? symptomData.selfCareTips || [] : []
      const preventionTips = typeof symptomData === "object" ? symptomData.preventionTips || [] : []

      symptoms.push({
        name: symptomName,
        description: `Common symptom that may indicate various conditions.`,
        categories: categories.length > 0 ? categories : ["general"],
        isEmergency,
        advice,
        precautions,
        selfCareTips,
        preventionTips,
      })
    }

    // Insert symptoms into database
    await Symptom.insertMany(symptoms)
    console.log(`Added ${symptoms.length} symptoms to the database`)

    mongoose.disconnect()
    console.log("Database initialization complete")
  } catch (error) {
    console.error("Error initializing database:", error)
    mongoose.disconnect()
  }
}

initializeSymptoms()

