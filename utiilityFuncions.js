import jwt from 'jsonwebtoken'; 


const cleSecrete = "yoyoyo"; 
let payload;

export async function CreationToken(payload, cleScrete) {
  
    return jwt.sign(payload, cleSecrete);

    
}


export const lireToken = (token) => {
    return jwt.verify(token, cleSecrete);
};
