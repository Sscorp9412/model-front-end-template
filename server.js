// load the things we need
var express = require("express");
var app = express();
var monk = require("monk");
var db = monk("localhost:27017/testdb");

// set the view engine to ejs
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(function (req, res, next) {
  req.db = db;
  next();
});


app.get("/", function (req, res) {
  var db = req.db;
  var collection = db.get("bio");
  collection.find({},  function (e, data) {
    res.render("./pages/main", {
      biodata: data,
    });
  });
});

app.listen(8080);
console.log("connecting Port :8080\nhttp://localhost:8080");
