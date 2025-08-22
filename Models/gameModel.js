// Models/gameModel.js
import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  name: String,
  ownerId: String, 
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("game", gameSchema);
