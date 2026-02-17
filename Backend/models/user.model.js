import mongoose from "mongoose";



const userSchema = new mongoose.Schema(
    {
  

  name: String,
  email: String,
  passwordHash: String,
  profilePhotoUrl: String,        // stored in S3 or uploads
  profileEmbedding: [Number],     // optional (store latest embedding)
  spacesCreated: [ObjectId],      // references Space
  spacesJoined: [ObjectId],       // references Space
  createdAt: Date,
  updatedAt: Date
})

export const User = mongoose.model("User", userSchema)  