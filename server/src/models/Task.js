import mongoose from "mongoose";
const { Schema } = mongoose;

export const TaskSchema = new Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true, default: "Fazer" },
    deadline: { type: String },
  },
  { timestamps: true }
);

export const Task = mongoose.model("Task", TaskSchema);
