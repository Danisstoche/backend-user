
import { checkAutorization } from "../Middleware/TokenVerification.js";

import express from "express";
import {
  AjouterPlayer,
  SuprimerPlayer,
  AugmenterouBaisserScore,
  AfficherAllPlayers,
  AfficherPlayer
} from "../Controllers/playerController.js";

const router = express.Router();

router.post("/:gameID", checkAutorization,AjouterPlayer);


router.delete("/:id",checkAutorization, SuprimerPlayer);


router.patch("/:id/score",checkAutorization, AugmenterouBaisserScore);


router.get("/all/:gameID",checkAutorization, AfficherAllPlayers);


router.get("/:gameID/:id", checkAutorization,AfficherPlayer);

export default router;
