import mongoose from "mongoose";

const spaceSchema = new mongoose.Schema({
  name: String,
  creator: ObjectId, // reference User
  members: [ObjectId], // users who joined
  isActive: Boolean,
  expiresAt: Date, // optional auto-delete
  totalPhotos: Number,
  totalEmbeddings: Number | undefined,
  createdAt: Date,
  updatedAt: Date,
});

export const Space = mongoose.model("Space", spaceSchema);
