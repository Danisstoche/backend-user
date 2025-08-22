// Models/playerModel.js
import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },       
  score: { type: Number, default: 0 },         
  gameID: { type: String, required: true },    
  userID: { type: String, required: false }     
});

export default mongoose.model("player", playerSchema);
