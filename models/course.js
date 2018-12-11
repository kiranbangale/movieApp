var mongoose = require("mongoose");

// Schema
var courseSchema = mongoose.Schema({
  topics: Array,
  description: String,
  title: String,
  videoUrl: String,
  tags: Array,
  isAvailable: Boolean,
  author: String,
  publishDate: {
    type: Date,
    default: Date.now
  }
});

var Course = (module.exports = mongoose.model("Course", courseSchema));

// Get
module.exports.getCourses = function(cb, limit) {
  Course.find(cb).limit(limit);
};
