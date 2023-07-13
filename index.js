const express = require('express');
const database = require("./database");
const app = express();
const port = 8060


app.use(express.json());


app.get("/", function (req, res) {
    res.send("Welcome to E-commerce")
})

app.listen(port, function () {
    console.log(`listen http://localhost:${port}`)
})