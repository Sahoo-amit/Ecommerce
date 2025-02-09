import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: { required: true, type: String },
  email: { required: true, type: String },
  password: { required: true, type: String },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

userSchema.methods.generateToken = async function (){
  try {
    return jwt.sign(
      { _id: this._id, role: this.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
  } catch (error) {
    console.log(error);
    throw new error("Token generation failed.")
  }
};

export const User = mongoose.model("User", userSchema);
