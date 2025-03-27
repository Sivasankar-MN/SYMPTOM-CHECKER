const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")
const {
  getSymptoms,
  getSymptomById,
  getSymptomsByCategory,
  searchSymptoms,
  createSymptom,
  updateSymptom,
  deleteSymptom,
  compareSymptoms, // Import the new compareSymptoms method
} = require("../controllers/symptomController")

// @route   GET api/symptoms
// @desc    Get all symptoms
// @access  Public
router.get("/", getSymptoms)

// @route   GET api/symptoms/search/:term
// @desc    Search symptoms by name
// @access  Public
router.get("/search/:term", searchSymptoms)

// @route   GET api/symptoms/category/:category
// @desc    Get symptoms by category
// @access  Public
router.get("/category/:category", getSymptomsByCategory)

// @route   GET api/symptoms/:id
// @desc    Get symptom by ID
// @access  Public
router.get("/:id", getSymptomById)

// @route   POST api/symptoms
// @desc    Create a symptom (admin only)
// @access  Private/Admin
router.post("/", auth, createSymptom)

// @route   POST api/symptoms/compare
// @desc    Compare input symptoms with existing symptoms
// @access  Public
router.post("/compare", compareSymptoms); // Add the new comparison route

// @route   PUT api/symptoms/:id
// @desc    Update a symptom (admin only)
// @access  Private/Admin
router.put("/:id", auth, updateSymptom)

// @route   DELETE api/symptoms/:id
// @desc    Delete a symptom (admin only)
// @access  Private/Admin
router.delete("/:id", auth, deleteSymptom)

module.exports = router
