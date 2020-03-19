const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true
  },
  instructorId: {
    type: String,
    required: true
  }
});

module.exports = Lesson = mongoose.model("Lesson", LessonSchema);
