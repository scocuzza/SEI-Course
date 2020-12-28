const express = require("express")
const app = express();
const port = 3000;

app.get('/homer', (req, res) => { 
    res.send('Doh!')
})

app.listen(port, () => {
    console.log("Don't have a cow man, I'm listening");
})

