const mongoose = require("mongoose");
const database = "mongodb://0.0.0.0:27017/Accessoires";

const connectdb = async () => {
    try {
        await mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to the MongoDB database");

   
    } catch (error) {
        console.log("Error connecting to the database:", error);
    }
};

connectdb();