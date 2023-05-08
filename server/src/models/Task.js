import mongoose from "mongoose";
const { Schema } = mongoose;

export const TaskScheme = new Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    deadline: { type: String, required: true },
  },
  { timestamps: true }
);
