// table schema goes in this file
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  hr: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Task", taskSchema); //tasks
