import { lireToken } from "../utiilityFuncions.js";


    export async function checkAutorization (req, res ,next) {
            const { headers } = req;         
            const { authorization } = headers; 

        try {
       
        if (!authorization) {
            return res.status(401).json("autorization manquante" );
        }

        decodedToken = lireToken(authorization)
        
        if (decodedToken == false ) {
            return res.send("autorization invalide")
        }
        const {id} = decodedToken
       
        req.headers.useAutorization = id 
        next();
    } catch (err) {
        res.json("Erreur serveur");
    }
}


export async function checkOwner(req, res, next) {
    let idH = req.headers["useAutorization"]; 
    let { id } = req.params;                 

    if (idH != id) {
        return res.send("Tu n'es pas autorisé à faire ça");
    }

    next(); 
}
