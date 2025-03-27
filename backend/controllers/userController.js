const User = require("../models/User")

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password")

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    res.json(user)
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ message: "Server error" })
  }
}

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
exports.updateUserProfile = async (req, res) => {
  const { name, age, gender, medicalConditions } = req.body

  try {
    const user = await User.findById(req.user.id)

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    // Update user profile
    user.name = name || user.name
    user.age = age || user.age
    user.gender = gender || user.gender
    user.medicalConditions = medicalConditions || user.medicalConditions

    await user.save()

    res.json(user)
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ message: "Server error" })
  }
}

// @desc    Delete user account
// @route   DELETE /api/users
// @access  Private
exports.deleteUserAccount = async (req, res) => {
  try {
    // Remove user
    await User.findByIdAndRemove(req.user.id)

    res.json({ message: "User deleted" })
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ message: "Server error" })
  }
}

