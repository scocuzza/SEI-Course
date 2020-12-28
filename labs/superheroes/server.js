const express = require("express");
const app = express();
const PORT = 3000;

// DATA
const superheroes = require("./models/superheroes.js");
const villains = require("./models/villains.js");

// ROUTES
// INDEX
app.get("/superheroes/", (req, res) => {
  res.render("index.ejs", { superheroes, villains });
});

// SHOW FOR SUPERHEROES
// I'M REUSING THE EXISTING SHOW.EJS
app.get("/superheroes/:index", (req, res) => {
  res.render("show.ejs", {
    character: superheroes[req.params.index],
  });
});

// SHOW ROUTE FOR VILLIANS
// I'M REUSING THE EXISTING SHOW.EJS
app.get("/villains/:index", (req, res) => {
  res.render("show.ejs", {
    character: villains[req.params.index],
  });
});

app.listen(PORT, () => {
  console.log("Here to save the day...");
});