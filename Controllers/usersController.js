import { CreationToken,  cleSecrete } from '../utiilityFuncions.js';
import User from '../Models/userModel.js';


export async function AjouterUser(req, res) {
  const { userName, password, firstName, lastName, dob, email, description} = req.body;

  if (! userName|| !password || !email ) {
    return res.send("nom du compte , mot de passe ou email requie");;
  }

    try {
    const newUser = await User.create({
      userName,
      password,
      firstName,
      lastName,
      dob,
      email,
      description,

    });

    res.json(newUser);
  } catch (err) {
    res.send("Erreur lors de la création du user");
  }
}




export async function SuprimerUser(req, res) {
  const { id } = req.params;
  try {
    const userSupprime = await User.findByIdAndDelete(id);
    if (!userSupprime) {
      return res.status(404).send("Utilisateur non trouvé");
    }
    return res.status(200).send("Utilisateur supprimé avec succès");
  } catch (err) {
    return res.status(500).send("Erreur serveur");
  }
}

export async function ModifierUser (req, res) {
    let { id } = req.params

    let { ClesModifier, Modification } = req.body

    try {
      const userModifier = await User.findById(id);
      
      if (!userModifier) {
        return res.status(404).send("user non trouvé");
      }
       userModifier[ClesModifier] = Modification
       await userModifier.save();
      return res.status(200).send("User modifier avec succès");
  
    }
    catch { 
      return res.status(500).send("Erreur serveur");
    }



}

export async function VerificstionUser(req, res) {
  let { password, userName, email } = req.body;

 
  let clesFiltrer;

  if (email) {
    clesFiltrer = { email: email };
  }  else {
    clesFiltrer = { userName: userName };
  } 


  
  let userViser = await User.findOne(clesFiltrer);

 
  if (!userViser) {
    return res.status(404).send("Utilisateur non trouve");
  }


  if (userViser.password !== password) {
    return res.status(401).send("Mot de passe incorrect");
  } 
  const payload = { id: userViser.id }


    let authorization = await CreationToken(payload,  cleSecrete) 

    res.setHeader('Authorization', authorization);
    res.status(200).json({ message: "Connexion réussie", token: authorization });


    
}




export async function AfficherAllUsers(req, res) {
  try {
    const users = await User.find();
    return res.status(200).json(users); 

  } catch (err) {

    return res.status(500).send("Erreur serveur");
  }
}



export async function AfficherUser(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send("Utilisateur non trouvé");
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).send("Erreur serveur");
  }
}
