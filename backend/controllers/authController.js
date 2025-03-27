const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require("../models/User")

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res) => {
  const { name, email, password } = req.body

  try {
    // Check if user already exists
    let user = await User.findOne({ email })

    if (user) {
      return res.status(400).json({ message: "User already exists" })
    }

    // Create new user
    user = new User({
      name,
      email,
      password,
    })

    await user.save()

    // Create JWT token
    const payload = {
      user: {
        id: user.id,
      },
    }

    jwt.sign(payload, process.env.JWT_SECRET || "secret", { expiresIn: "7d" }, (err, token) => {
      if (err) throw err
      res.json({
        token,
        user: {
          _id: user.id,
          name: user.name,
          email: user.email,
        },
      })
    })
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ message: "Server error" })
  }
}

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res) => {
  const { email, password } = req.body

  try {
    // Check if user exists
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    // Check password
    const isMatch = await user.comparePassword(password)

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    // Create JWT token
    const payload = {
      user: {
        id: user.id,
      },
    }

    jwt.sign(payload, process.env.JWT_SECRET || "secret", { expiresIn: "7d" }, (err, token) => {
      if (err) throw err
      res.json({
        token,
        user: {
          _id: user.id,
          name: user.name,
          email: user.email,
        },
      })
    })
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ message: "Server error" })
  }
}

// @desc    Get user data
// @route   GET /api/auth/user
// @access  Private
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password")
    res.json(user)
  } catch (err) {
    console.error(err.message)
    res.status(500).json({ message: "Server error" })
  }
}

