var mongoose = require("mongoose");

// Schema
var roleSchema = mongoose.Schema({
  type: String,
  enum: ["author", "subscriber"]
});

var Role = (module.exports = mongoose.model("Role", roleSchema));

// Get
module.exports.getRoles = function(cb) {
  Role.find(cb);
};
