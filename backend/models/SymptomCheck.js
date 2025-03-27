const mongoose = require("mongoose")

const SymptomCheckSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  symptoms: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Symptom",
    },
  ],
  conditions: [
    {
      name: {
        type: String,
        required: true,
      },
      probability: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
      },
      recommendations: [
        {
          type: String,
        },
      ],
    },
  ],
  emergencyAdvice: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("SymptomCheck", SymptomCheckSchema)

