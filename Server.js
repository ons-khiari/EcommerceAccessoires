
const express = require('express');
const database = require("./database");
const app = express();
const port = 8060


app.use(express.json());

const categorieRoute = require("./Router/categorieRouter");
const productRoute=require("./Router/ProductRouter")
app.use('/categorie',categorieRoute)
app.use('/product', productRoute)


app.get("/getImage/:img", function(req, res){
    res.sendFile(__dirname + "/storage/" + req.params.img)
})
app.listen(port, function() {
    console.log(`listen http://localhost:${port}`)
})