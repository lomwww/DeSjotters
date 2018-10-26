var express = require("express");
var path = require ("path");
var app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

//landing page
app.get("/", function(req, res){
  res.render("home");
});

//next page
app.get("/starwars", function(req, res){
  res.render("starwars");
});

//
app.get("/avatar", function(req, res){
  res.render("avatar");
});

app.get("/wolverine", function(req, res){
  res.render("wolverine");
});

app.get("/news", function(req, res){
  res.render("news");
});

app.get("/oscars", function(req, res){
  res.render("oscars");
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

app.get("/reviews", function(req, res){
  res.render("reviews");
});

app.get("/upcoming", function(req, res){
  res.render("upcoming");
});




app.use(express.static("public"));
app.listen(3000);
