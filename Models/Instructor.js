const mongoose = require("mongoose");

const InstructorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = Instructor = mongoose.model("Instructor", InstructorSchema);
