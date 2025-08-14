import express from "express";
import {
  AjouterUser,
  SuprimerUser,
  ModifierUser,
  AfficherAllUsers,
  AfficherUser
} from "../Controllers/usersController.js";

const app = express.Router();


app.post("/", AjouterUser);


app.delete("/:id", SuprimerUser);


app.put("/:id", ModifierUser);


app.get("/", AfficherAllUsers);


app.get("/:id", AfficherUser);

export default app;
