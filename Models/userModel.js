import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String
  },
  dob:{
    type: Date
  },
  email:{
    type: String,
    required: true
  },
  description: {
    type: String
  },
  createdAt: { 
  type: Date,
  default: () => { return new Date(); }
}

});


export default mongoose.model("user", userSchema);
