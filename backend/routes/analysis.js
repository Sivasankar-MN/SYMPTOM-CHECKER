const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")
const { analyzeSymptoms, getSymptomHistory, getSymptomCheckById } = require("../controllers/analysisController")

// @route   POST api/analysis
// @desc    Analyze symptoms and get potential conditions
// @access  Private
router.post("/", auth, analyzeSymptoms)

// @route   GET api/analysis/history
// @desc    Get user's symptom check history
// @access  Private
router.get("/history", auth, getSymptomHistory)

// @route   GET api/analysis/:id
// @desc    Get a specific symptom check by ID
// @access  Private
router.get("/:id", auth, getSymptomCheckById)

module.exports = router

