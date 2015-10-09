    //define and require 'express' and use it to create our API (api/jobs)
    //also use express to set our view engine to jade
    //and setup the actual server
var express = require('express');
    //instantiate our express framework and save its reference inside the app variable
var app = express();

app.set('views', __dirname);

app.use(express.static(__dirname + "/public"));
// console.log("dirName -> " + __dirname);
    //no matter what we request, simply send the index.html file
app.get('/', function(req, res) {
    res.sendFile("index.html");
});


    //start the server by listening to specified PORT
// app.listen(process.env.PORT, process.env.IP);
app.listen("3000", "127.0.0.1");
