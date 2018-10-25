var express = require("express");
var path = require ("path");
var app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

//landing page
app.get("/", function(req, res) {
  res.render("landingpage");
});
//next page
app.get("/nextpage", function(req, res){
  res.render("nextPage");
});

//
app.get("/comptenties", function(req, res){
  res.render("comptenties");
});

app.get("/contact", function(req, res){
  res.render("contact");
});

app.get("/inspiraties", function(req, res){
  res.render("inspiraties");
});

app.get("/persoonlijkegegevens", function(req, res){
  res.render("persoonlijkeGegevens");
});

app.use(express.static("public"));
app.listen(3000);
