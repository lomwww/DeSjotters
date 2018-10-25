var express = require('express');
var request = require('request');
var path = require('path');

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static('public'));

app.listen(3000, function() {
  console.log('Node luistert op poort 3000');
});

console.log("Webserver draait");
