
import Player from "../Models/playerModel.js";



export async function AjouterPlayer(req, res) {
  const { name } = req.body;
  const { gameID } = req.params;
  const userID = req.headers["useAutorization"];
  

  if (! gameID|| !userID ) {
    return res.send("tu peut pas faire une tell action");
  }
  if (! name ) {
    return res.send("nom obligatoire");
  }

    try {
    const newPlayer = await Player.create({
      name,
      gameID,
      userID,

    });

    res.json(newPlayer);
  } catch (err) {
    res.send("Erreur lors de la création du joueur");
  }
}




export async function SuprimerPlayer(req, res) {
  const { id } = req.params;
  try {
    const PlayerSupprime = await Player.findByIdAndDelete(id);
    if (!PlayerSupprime) {
      return res.status(404).send("joueur non trouvé");
    }
    return res.status(200).send("le joueur supprimé avec succès");
  } catch (err) {
    return res.status(500).send("Erreur serveur");
  }
}


export async function AugmenterouBaisserScore(req, res) {
    const { id } = req.params;
    const { ab }  = req.body
    try {
        let player = await Player.findById(id);

        player.score += ab;

        await player.save();

        res.json(player)
    }
    catch (err) {
    return res.status(500).send("Erreur serveur lors de la modification du score");
    }

}







export async function AfficherAllPlayers(req, res) {
    const {gameID} = req.params
  try {
    const players = await Player.find({gameID});
    return res.status(200).json(players);
  } catch (err) {
    return res.status(500).send("Erreur serveur");
  }
}



export async function AfficherPlayer(req, res) {
  const { id, gameID} = req.params;

  try {
    const player = await Player.findOne({_id: id, gameID});
    if (!player) {
      return res.status(404).send("joueur non trouve");
    }
    return res.status(200).json({ name: player.name, score: player.score });
  } catch (err) {
    return res.status(500).send("Erreur serveur");
  }
}



