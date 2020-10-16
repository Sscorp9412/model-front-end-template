// load the things we need
var express = require("express");
var app = express();
var monk = require("monk");
var db = monk("mongo://localhost:27017/testdb");

// set the view engine to ejs
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(function (req, res, next) {
  req.db = db;
  next();
});


app.get('/',function(req,res){
  res.render('./pages/main');
});
// app.use(function(req, res, next) {
//     next(createError(404));
//    });

//    // error handler
//    app.use(function(err, req, res, next) {
//    // set locals, only providing error in development
//    res.locals.message = err.message;
//    res.locals.error = req.app.get('env') === 'development' ? err : {};

//    // render the error page
//    res.status(err.status || 500);
//    res.render('error');
//    });

app.get("/", function (req, res) {
  var db = req.db;
  var collection = db.get("bio");
  collection.find({},  function (e, docs) {
    console.log(docs);
    res.render("biodata", {
      biodata: docs,
    });
  });
});

app.listen(8080);
console.log("connecting Port :8080\nhttp://localhost:8080");
