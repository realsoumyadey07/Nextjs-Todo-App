import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
     todo: {
          type: String,
          required: true,
          trim: true
     },
     completed: {
          type: Boolean,
          default: false
     }
}, {timestamps: true})

export const TodoModel = mongoose.model("Todo", todoSchema)