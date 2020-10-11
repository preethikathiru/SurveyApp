const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ResponseSchema = new Schema({
  totalResponse: [{
    identifier: {
      type: String,
      required: true,
    },
    headline: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: "",
    },
    answer: {
      type: String, 
      default: "",
    },
  }],
  date: {
    type: Date,
    default: Date.now
  },
  submittedBy: {
    type: String,
    required: true,
    unique: true,
  },
  submittedByName: {
    type: String,
    required: true,
  },
});

module.exports = Response = mongoose.model("response", ResponseSchema);
