
import Game from "../Models/gameModel.js";



export async function AjouterGame(req, res) {
  const { name } = req.body;
  const {ownerId} =  req.headers["useAutorization"]

    if (!ownerId) {
        return res.send("vous devez posseder un compte pour ce type d'action")
    }
    if (! name) {
    return res.send("nom du jeu requie");
  }

    try {
    const newGame = await Game.create({
      name,
      ownerId,
    });

    res.json(newGame);
  } catch (err) {
    res.send("Erreur lors de la création du jeu");
  }
}



export async function SuprimerGame(req, res) {
  const { id } = req.params;
  try {
    const GameSupprime = await Game.findByIdAndDelete(id);
    if (!GameSupprime) {
      return res.status(404).send("jeu non trouvé");
    }
    return res.status(200).send("le jeu supprimé avec succès");
  } catch (err) {
    return res.status(500).send("Erreur serveur");
  }
}




export async function ModifierGame (req, res) {
    let { id } = req.params

    let { Modification } = req.body

    try {
      const GameModifier = await Game.findById(id);
      
      if (!GameModifier) {
        return res.status(404).send("jeu non trouvé");
      }
       GameModifier.name = Modification
       await GameModifier.save();
      return res.status(200).send("jeu modifier avec succès");
  
    }
    catch { 
      return res.status(500).send("Erreur serveur");
    }
}




export async function AfficherAllGames(req, res) {
    const ownerId = req.headers["useAutorization"];
  try {
    const Games= await Game.find({ ownerId });

    return res.status(200).json(Games); 

  } catch (err) {

    return res.status(500).send("Erreur serveur");
  }
}


export async function AfficherGame(req, res) {
  const { id } = req.params;
  const ownerId = req.headers["useAutorization"];
  try {
    const game = await Game.findOne({_id: id , ownerId});
    if (!game) {
      return res.status(404).send("jeu non trouvé");
    }
    return res.status(200).json(game);
  } catch (err) {
    return res.status(500).send("Erreur serveur");
  }
}


