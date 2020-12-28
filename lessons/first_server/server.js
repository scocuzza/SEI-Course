const express = require('express')
const app = express(); 
const port = 3000;

const plants = [
    "Monstera Deliciosa",
    "Corpse Flower",
    "Elephant-Foot Yam",
    "Witches' Butter",
  ];

app.get("/awesome", (req, res) => {
    //this will never be reached
    res.send(`
      <h1>Plants are awesome!</h1>
      <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `);
  });

app.get("/hello/:firstname/:lastname", (req, res) => {
   console.log(req.params);
   res.send("hello " + req.params.firstname + " " + req.params.lastname);
  });

app.get('/:plantIndex', ( req, res ) => {
    console.log(req.params);
    res.send(plants[req.params.plantIndex])
});

app.listen(port, ()=> {
    console.log("I am listening for requests...");
});




