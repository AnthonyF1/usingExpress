/*
   CIS 131 Web Dev II
   Express Server

   Author: Anthony Forte
   Date: 11/16/2018

   Filename: index.js
*/

var express = require('express')
var app = express()
var path = require('path')

//make express look in the general director
app.use("/", express.static(__dirname));

// get index page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// get about page
app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
}); 

app.listen(3000);

console.log("Express server listening to Port 3000");

