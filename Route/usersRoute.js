import express from "express";
import { checkAutorization, checkOwner } from "../Middleware/TokenVerification.js";
import {
  AjouterUser,
  SuprimerUser,
  ModifierUser,
  AfficherAllUsers,
  AfficherUser,
  VerificstionUser
} from "../Controllers/usersController.js";

const app = express.Router();


app.post("/", AjouterUser);

app.post("/login", VerificstionUser);

app.delete("/:id", checkAutorization,checkOwner, SuprimerUser);


app.put("/:id",  checkAutorization,checkOwner, ModifierUser);


app.get("/", checkAutorization, AfficherAllUsers);


app.get("/:id", checkAutorization, AfficherUser);

export default app;
