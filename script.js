const express = require('express');
const database = require("./database");
const User = require('./Models/userModel');
const app = express();
const port = 8060;

const AuthRoute = require('./Routes/Auth');
const { authUser, authRole } = require('./Controller/AuthController');
app.use(express.json());

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

//get all users
app.get("/users", async function (req, res) {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//create a new user
app.post("/users", async function (req, res) {
    try {
        const user = await User.create(req.body);
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
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(port, function () {
    console.log(`Server is running at http://localhost:${port}`);
});

app.use('/api', AuthRoute);