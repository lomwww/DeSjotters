/*
 * npm init
 * npm install express --save
 * npm install request --save
 * npm install ejs --save
 *
 * node(mon) index.js
 */

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


request('https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek/MapServer/636/query?where=1%3D1&outFields=id,naam,straat,huisnummer,postcode&outSR=4326&f=json',
  function(error, response, body){
    var data = JSON.parse(body);

    for(var i=0; i < data.features.length; i++) {
        console.log("naam: " + data.features[i].attributes.naam);
        console.log("coord: " + data.features[i].geometry.x + ", " + data.features[i].geometry.y);
        console.log("");
    }

  }
);

//landing page
app.get("/inlog", function(req, res){
  res.render("inlog");
});

app.get("/registratie", function(req, res){
  res.render("registratie");
});

//next page
app.get("/reservatie", function(req, res){
  res.render("reservatie");
});

//
app.get("/home", function(req, res){
  res.render("home");
});

app.get("/wolverine", function(req, res){
  res.render("wolverine");
});

app.get("/uitlegtwee", function(req, res){
  res.render("uitlegtwee");
});

app.get("/uitlegdrie", function(req, res){
  res.render("uitlegdrie");
});

app.get("/supergirl", function(req, res){
  res.render("supergirl");
});

app.get("/chucky", function(req, res){
  res.render("chucky");
});

app.get("/top", function(req, res){
  res.render("top");
});

app.get("/uitleg", function(req, res){
  res.render("uitleg");
});

app.get("/upcoming", function(req, res){
  res.render("upcoming");
});
