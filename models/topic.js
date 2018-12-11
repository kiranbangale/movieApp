var mongoose = require("mongoose");

// Schema
var topicSchema = mongoose.Schema({
  type: String,
  enum: ["Authentication", "Serverless", "Firebase", "Responsive", "Socket.io"]
});

var Topic = (module.exports = mongoose.model("Topic", topicSchema));

// Get
module.exports.getTopics = function(cb) {
  Topic.find(cb);
};
