const Symptom = require("../models/Symptom")

// @desc    Get all symptoms
// @route   GET /api/symptoms
// @access  Public
exports.getSymptoms = async (req, res) => {
  try {
    const symptoms = await Symptom.find().sort({ name: 1 }).select('name description categories isEmergency')
    console.log("Retrieved symptoms:", symptoms); // Log the retrieved symptoms


    res.json(symptoms)
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ message: "Server error" })
  }
}

// @desc    Get symptom by ID
// @route   GET /api/symptoms/:id
// @access  Public
exports.getSymptomById = async (req, res) => {
  try {
    const symptom = await Symptom.findById(req.params.id)

    if (!symptom) {
      return res.status(404).json({ message: "Symptom not found" })
    }

    res.json(symptom)
  } catch (err) {
    console.error(err.message)

    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Symptom not found" })
    }

    res.status(500).json({ message: "Server error" })
  }
}

// @desc    Get symptoms by category
// @route   GET /api/symptoms/category/:category
// @access  Public
exports.getSymptomsByCategory = async (req, res) => {
  try {
    const symptoms = await Symptom.find({
      categories: req.params.category,
    }).sort({ name: 1 })

    res.json(symptoms)
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ message: "Server error" })
  }
}

// @desc    Search symptoms by name
// @route   GET /api/symptoms/search/:term
// @access  Public
exports.searchSymptoms = async (req, res) => {
  try {
    const searchTerm = req.params.term
    const symptoms = await Symptom.find({
      name: { $regex: searchTerm, $options: "i" },
    }).sort({ name: 1 })

    res.json(symptoms)
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ message: "Server error" })
  }
}

// @desc    Compare input symptoms with existing symptoms

// @route   POST /api/symptoms
// @access  Private/Admin
exports.createSymptom = async (req, res) => {
  const { name, description, categories, isEmergency, advice, precautions, selfCareTips, preventionTips } = req.body

  try {
    // Check if symptom already exists
    let symptom = await Symptom.findOne({ name })

    if (symptom) {
      return res.status(400).json({ message: "Symptom already exists" })
    }

    // Create new symptom
    symptom = new Symptom({
      name,
      description,
      categories,
      isEmergency,
      advice,
      precautions,
      selfCareTips,
      preventionTips,
    })

    await symptom.save()

    res.json(symptom)
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ message: "Server error" })
  }
}

exports.compareSymptoms = async (req, res) => {
  const inputSymptoms = req.body.symptoms; // Assuming symptoms are sent in the request body

  try {
    const existingSymptoms = await Symptom.find();
    const matchedSymptoms = existingSymptoms.filter(existingSymptom => 
      inputSymptoms.includes(existingSymptom.name)
    );

    res.json(matchedSymptoms);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
}

// @desc    Update a symptom (admin only)

// @route   PUT /api/symptoms/:id
// @access  Private/Admin
exports.updateSymptom = async (req, res) => {
  const { name, description, categories, isEmergency, advice, precautions, selfCareTips, preventionTips } = req.body

  try {
    const symptom = await Symptom.findById(req.params.id)

    if (!symptom) {
      return res.status(404).json({ message: "Symptom not found" })
    }

    // Update symptom
    symptom.name = name || symptom.name
    symptom.description = description || symptom.description
    symptom.categories = categories || symptom.categories
    symptom.isEmergency = isEmergency !== undefined ? isEmergency : symptom.isEmergency
    symptom.advice = advice || symptom.advice
    symptom.precautions = precautions || symptom.precautions
    symptom.selfCareTips = selfCareTips || symptom.selfCareTips
    symptom.preventionTips = preventionTips || symptom.preventionTips

    await symptom.save()

    res.json(symptom)
  } catch (err) {
    console.error(err.message)

    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Symptom not found" })
    }

    res.status(500).json({ message: "Server error" })
  }
}

// @desc    Delete a symptom (admin only)
// @route   DELETE /api/symptoms/:id
// @access  Private/Admin
exports.deleteSymptom = async (req, res) => {
  try {
    const symptom = await Symptom.findById(req.params.id)

    if (!symptom) {
      return res.status(404).json({ message: "Symptom not found" })
    }

    await symptom.remove()

    res.json({ message: "Symptom removed" })
  } catch (err) {
    console.error(err.message)

    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Symptom not found" })
    }

    res.status(500).json({ message: "Server error" })
  }
}
