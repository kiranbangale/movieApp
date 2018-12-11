var mongoose = require("mongoose");
Role = require("./role");
Course = require("./models/course");

// Schema
var userSchema = mongoose.Schema({
  role: {
    type: Role
  },
  subscriber


});

var Course = (module.exports = mongoose.model("Course", userSchema));

// Get
module.exports.getCourses = function(cb, limit) {
  Course.find(cb).limit(limit);
};


- users[] -- Roles: author, subscriber
- subscribers[]
    - subscriptions[]
        - courses[]
            - course{}
                - user comments
- authors[]
    - author{}
        - courses[]
    