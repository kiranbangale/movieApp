var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

Course = require("./models/course");

mongoose.connect(
  "mongodb://kiran:kiran123@ds021915.mlab.com:21915/udemy-app",
  { useNewUrlParser: true }
);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", function(req, res) {
  res.send("Please use /api/courses or /api/users");
});

app.get("/api/courses", function(req, res) {
  Course.getCourses(function(err, courses) {
    if (err) {
      throw err;
    }
    res.json(courses);
  });
});

app.listen(3000);

console.log("Node server up and running at port 3000.");
