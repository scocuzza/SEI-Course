const express = require("express")
const app = express(); 
const port = 3000;

app.get("/frasier", (req, res)=> {
    res.send("Once in prep school, the Existential Club onced named me 'Most Likely to be'")
})

app.get("/niles", (req, res) => {
    res.send("You know, sometimes I wonder if I'm not just in psychiatry for the money")
})

app.get("/daphne", (req, res) => {
    res.send("")
})


app.listen(port, () => {
    console.log("Hello, Seattle. I'm listening...");
})