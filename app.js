var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var port = process.env.port || 3000;
app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/person/:id", function(req, res) {
  res.render("person", { ID: req.params.id, QStr: req.query.QStr });
});

app.post("/person", urlencodedParser, function(req, res) {
  res.send("Thank you");
  console.log("req.body", req.body);
});

app.listen(port);
