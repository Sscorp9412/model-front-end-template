// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use( express.static( 'public' ) );

// use res.render to load up an ejs view file

// index page
// app.get('/', function(req, res) {
//     res.render('pages/main');
// });


app.get('/', function(req, res) {
    var images = [];
    let names;
    for(let i=1;i<=10;i++)
    {
        name=i+".jpg";
        images.push(name);
    }
    var tagline = "No programming concept is complete without a cute animal mascot.";
    console.log(images);
    res.render('./pages/main', {
        images:images,
        tagline: tagline
    });
});

app.listen(8080);
console.log("connecting Port :8080\nhttp://localhost:8080");
