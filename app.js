import express from "express";
import mongoose from "mongoose";
import userRoutes from "./Route/usersRoute.js";
import gamesRoutes from "./Route/gamesRoute.js";
import playersRoutes from "./Route/playersRoute.js"

const app = express();

app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/UserApp")
console.log("tu es connecter as mongodb")
  
app.use("/users", userRoutes);
app.use("/games", gamesRoutes);
app.use("/players", playersRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé `);
});
