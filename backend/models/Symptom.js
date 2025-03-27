const mongoose = require("mongoose")

const SymptomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  categories: {
    type: [String],
    enum: [
      "respiratory",
      "digestive",
      "cardiovascular",
      "neurological",
      "musculoskeletal",
      "skin",
      "general",
      "urinary",
      "reproductive",
      "mental",
      "emergency",
    ],
  },
  isEmergency: {
    type: Boolean,
    default: false,
  },
  advice: {
    type: String,
  },
  precautions: {
    type: [String],
    default: [],
  },
  selfCareTips: {
    type: [String],
    default: [],
  },
  preventionTips: {
    type: [String],
    default: [],
  },
})

module.exports = mongoose.model("Symptom", SymptomSchema)

