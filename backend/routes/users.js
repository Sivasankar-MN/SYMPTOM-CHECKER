const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")
const { getUserProfile, updateUserProfile, deleteUserAccount } = require("../controllers/userController")

// @route   GET api/users/profile
// @desc    Get user profile
// @access  Private
router.get("/profile", auth, getUserProfile)

// @route   PUT api/users/profile
// @desc    Update user profile
// @access  Private
router.put("/profile", auth, updateUserProfile)

// @route   DELETE api/users
// @desc    Delete user account
// @access  Private
router.delete("/", auth, deleteUserAccount)

module.exports = router

