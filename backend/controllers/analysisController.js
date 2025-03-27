const Symptom = require("../models/Symptom")
const SymptomCheck = require("../models/SymptomCheck")
const { symptomDatabase, emergencyConditions } = require("../data/symptomDatabase")

// @desc    Analyze symptoms and get potential conditions
// @route   POST /api/analysis
// @access  Private
exports.analyzeSymptoms = async (req, res) => {
  const { symptoms } = req.body

  try {
    console.log("Symptoms array:", symptoms); // Log the symptoms array
    console.log("Processing symptoms for analysis..."); // Log processing start

    // Check if symptoms array is provided
    if (!symptoms || symptoms.length === 0) {
        console.log("No symptoms provided for analysis."); // Log the absence of symptoms

      return res.status(400).json({ message: "Please provide at least one symptom" })
    }

    // Get symptom details from database
    const symptomDetails = await Symptom.find({ _id: { $in: symptoms } });
    console.log("Retrieved symptom details:", symptomDetails); // Log the retrieved symptom details


    if (symptomDetails.length === 0) {
        console.log("No valid symptoms found in the database."); // Log when no valid symptoms are found

      return res.status(404).json({ message: "No valid symptoms found" })
    }

    // Check for emergency symptoms
    const emergencySymptoms = symptomDetails.filter((s) => s.isEmergency)
    let emergencyAdvice = null

    if (emergencySymptoms.length > 0) {
      emergencyAdvice =
        "SEEK IMMEDIATE MEDICAL ATTENTION. You have reported symptoms that may indicate a serious condition requiring urgent care."
    }

    // Analyze symptoms and determine potential conditions
    const conditions = analyzeSymptoms(symptomDetails)

    // Create a new symptom check record
    const symptomCheck = new SymptomCheck({
      user: req.user.id,
      symptoms,
      conditions,
      emergencyAdvice,
    })

    await symptomCheck.save()

    console.log("Returning analysis results:", {
      conditions,
      symptoms: symptomDetails,
      emergencyAdvice,
      timestamp: symptomCheck.createdAt,
    }); // Log the results being returned

    // Return the analysis results
    res.json({
      conditions,
      symptoms: symptomDetails,
      emergencyAdvice,
      timestamp: symptomCheck.createdAt,
    })
  } catch (err) {
    console.error("Error processing symptoms:", err.message) // Log the error message
    res.status(500).json({ message: "Server error" })
  }
}

// @desc    Get user's symptom check history
// @route   GET /api/analysis/history
// @access  Private
exports.getSymptomHistory = async (req, res) => {
  try {
    const history = await SymptomCheck.find({ user: req.user.id }).sort({ createdAt: -1 }).populate("symptoms", "name")
    res.json(history)
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ message: "Server error" })
  }
}

// @desc    Get a specific symptom check by ID
// @route   GET /api/analysis/:id
// @access  Private
exports.getSymptomCheckById = async (req, res) => {
  try {
    const symptomCheck = await SymptomCheck.findById(req.params.id).populate("symptoms", "name")

    if (!symptomCheck) {
      return res.status(404).json({ message: "Symptom check not found" })
    }

    // Check if the symptom check belongs to the user
    if (symptomCheck.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" })
    }

    res.json(symptomCheck)
  } catch (err) {
    console.error(err.message)

    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Symptom check not found" })
    }

    res.status(500).json({ message: "Server error" })
  }
}

// Function to analyze symptoms and determine potential conditions
function analyzeSymptoms(symptoms) {
  // Mock conditions for demo purposes
  const mockConditions = [
    {
      name: "New Condition",
      description: "Description of the new condition.",
      recommendations: [
        "Recommendation 1 for new condition.",
        "Recommendation 2 for new condition.",
      ],
    },
    {
      name: "Common Cold",
      description:
        "A viral infection of the upper respiratory tract. Common symptoms include runny nose, sore throat, cough, and fever.",
      recommendations: [
        "Rest and stay hydrated",
        "Over-the-counter cold medications may help relieve symptoms",
        "Use a humidifier to ease congestion",
        "Consult a doctor if symptoms worsen or last more than 10 days",
      ],
    },
    {
      name: "Influenza (Flu)",
      description:
        "A viral infection that attacks your respiratory system. The flu is more severe than the common cold.",
      recommendations: [
        "Rest and stay hydrated",
        "Take fever-reducing medications if needed",
        "Antiviral medications may be prescribed if diagnosed early",
        "Seek medical attention if symptoms are severe or you're in a high-risk group",
      ],
    },
    {
      name: "Allergies",
      description: "An allergic response to allergens like pollen, causing symptoms similar to a cold.",
      recommendations: [
        "Over-the-counter antihistamines",
        "Avoid known allergens when possible",
        "Use air purifiers indoors",
        "Consult an allergist for persistent symptoms",
      ],
    },
    {
      name: "Gastroenteritis",
      description:
        "Inflammation of the stomach and intestines, typically resulting from a viral or bacterial infection.",
      recommendations: [
        "Stay hydrated with clear fluids",
        "Eat bland, easy-to-digest foods",
        "Rest",
        "Seek medical attention if symptoms are severe or persistent",
      ],
    },
    {
      name: "Migraine",
      description: "A headache of varying intensity, often accompanied by nausea and sensitivity to light and sound.",
      recommendations: [
        "Rest in a quiet, dark room",
        "Apply cold compresses to your forehead",
        "Over-the-counter pain relievers may help",
        "Consult a doctor for recurring migraines",
      ],
    },
    {
      name: "Hypertension",
      description: "High blood pressure that can lead to serious health problems if left untreated.",
      recommendations: [
        "Maintain a healthy diet low in salt",
        "Exercise regularly",
        "Limit alcohol consumption",
        "Take prescribed medications as directed",
        "Regular monitoring of blood pressure",
      ],
    },
    {
      name: "Anxiety Disorder",
      description:
        "A mental health condition characterized by feelings of worry, anxiety, or fear that are strong enough to interfere with daily activities.",
      recommendations: [
        "Practice relaxation techniques like deep breathing",
        "Regular physical activity",
        "Adequate sleep",
        "Consider therapy or counseling",
        "Consult a healthcare provider about treatment options",
      ],
    },
  ]

  // Map symptoms to categories
  const symptomCategories = symptoms.reduce((acc, symptom) => {
    symptom.categories.forEach((category) => {
      if (!acc[category]) acc[category] = 0
      acc[category]++
    })
    return acc
  }, {})

  // Determine which conditions match the symptoms
  const results = []

  // Add logic for new condition analysis
  if (symptomCategories.newCategory) {
    results.push({
      ...mockConditions[7], // New Condition
      probability: Math.min(60, 30 + symptomCategories.newCategory * 10),
    });
  }

  // For demo purposes, we'll use a simple matching algorithm
  if (symptomCategories.respiratory) {
    // Add respiratory conditions with varying probabilities
    results.push({
      ...mockConditions[0], // Common Cold
      probability: Math.min(85, 50 + symptomCategories.respiratory * 10),
    })

    results.push({
      ...mockConditions[1], // Influenza
      probability: Math.min(70, 30 + symptomCategories.respiratory * 8),
    })

    if (symptomCategories.general) {
      results[1].probability += 10 // Increase flu probability if general symptoms present
    }
  }

  if (symptomCategories.respiratory && symptomCategories.general) {
    results.push({
      ...mockConditions[2], // Allergies
      probability: Math.min(65, 40 + symptomCategories.respiratory * 5),
    })
  }

  if (symptomCategories.digestive) {
    results.push({
      ...mockConditions[3], // Gastroenteritis
      probability: Math.min(80, 50 + symptomCategories.digestive * 15),
    })
  }

  if (symptomCategories.neurological) {
    results.push({
      ...mockConditions[4], // Migraine
      probability: Math.min(75, 40 + symptomCategories.neurological * 12),
    })
  }

  if (symptomCategories.cardiovascular) {
    results.push({
      ...mockConditions[5], // Hypertension
      probability: Math.min(70, 40 + symptomCategories.cardiovascular * 15),
    })
  }

  if (symptomCategories.mental) {
    results.push({
      ...mockConditions[6], // Anxiety Disorder
      probability: Math.min(75, 40 + symptomCategories.mental * 12),
    })
  }

  // Sort by probability (highest first)
  results.sort((a, b) => b.probability - a.probability)

  return results
}
