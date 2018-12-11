var mongoose = require("mongoose");

// Schema
var tagSchema = mongoose.Schema({
  type: String,
  enum: ["Backend", "Frontend", "FullStack", "MeanStack", "Web Development"]
});

var Tag = (module.exports = mongoose.model("Tag", tagSchema));

// Get
module.exports.getTags = function(cb) {
  Tag.find(cb);
};
