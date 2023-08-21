
const express = require('express');
const database = require("./database");
const app = express();
const port = 8060
const cors = require('cors');











const axios = require('axios');

async function fetchData() {
  try {
   
    const response = await axios.post('http://localhost:8060/product/add', data);
    // Traiter la réponse réussie ici
    console.log(response.data);
  } catch (error) {
    // Gérer l'erreur ici
    console.error('Erreur lors de la requête:', error.message);
    // Vous pouvez également afficher un message d'erreur à l'utilisateur
  }
}

// Appel de la fonction asynchrone
fetchData();

let corsOptions={
    origin:['http://localhost:3000']
}
app.use(cors(corsOptions))

app.get("/", function (req, res) {
    res.send("Welcome to Home page");
});

app.get("/homepage", (req, res) => {
    res.send("Welcome to the homepage (Client)");
});

//dashboard route for admins (type 2 users)
app.get("/dashboard", (req, res) => {
    res.send("Welcome to the dashboard (Admin)");
});


  
app.use(express.json());


const AuthRoute = require('./Router/AuthRouter');
const { authUser, authRole } = require('./Controller/AuthController');
const categorieRoute = require("./Router/categorieRouter");
const productRoute=require("./Router/ProductRouter");
const PanierRoute=require("./Router/PanierRouter");
const OrderRoute=require("./Router/orderRouter");
app.use('/categorie',categorieRoute)
app.use('/product', productRoute)
app.use('/panier', PanierRoute)
app.use('/api', AuthRoute);
app.use('/order', OrderRoute)


app.use(cors());
   
  
  
app.get("/getImage/:img", function(req, res){
    res.sendFile(__dirname + "/storage/" + req.params.img)
})

app.get("/users", async function (req, res) {
    try {
        const users = await users.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//create a new user
app.post("/users", async function (req, res) {
    try {
        const user = await user.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

//get user by ID
app.get("/users/:id", async function (req, res) {
    try {
        const { id } = req.params;
        const user = await user.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.listen(port, function() {
    console.log(`listen http://localhost:${port}`)
})