

import { checkAutorization } from "../Middleware/TokenVerification.js";

import express from "express";
import {
  AjouterGame,
  SuprimerGame,
  ModifierGame,
  AfficherAllGames,
  AfficherGame
} from "../Controllers/gameController.js";

const router = express.Router();

router.post("/",checkAutorization, AjouterGame);


router.delete("/:id",checkAutorization, SuprimerGame);


router.put("/:id",checkAutorization, ModifierGame);


router.get("/",checkAutorization, AfficherAllGames);


router.get("/:id",checkAutorization, AfficherGame);

export default router;
