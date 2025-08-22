import jwt from 'jsonwebtoken'; 


export const cleSecrete = "yoyoyo"; 

export async function CreationToken(payload, cleScrete) {
  
    return jwt.sign(payload, cleSecrete);

    
}


export const lireToken = (token) => {
  try {
    return jwt.verify(token, cleSecrete);
  } catch (err) {
    return false;
  }
};
