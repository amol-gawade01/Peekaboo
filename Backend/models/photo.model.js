import mongoose from "mongoose";
const photoSchema = new mongoose.Schema({
  space: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Space",
    required: true,
  },

  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },

  publicId: {
    type: String, // cloudinary public_id
    required: true,
  },

  embeddings: [
    {
      type: [Number],
    }
  ],

  facesCount: {
    type: Number,
    default: 0,
  }

}, { timestamps: true });


export const Photo = mongoose.model("Photo",photoSchema);