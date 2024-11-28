import express from "express"
import { createTodo, getAllTodos } from "../controller/todo.controller"

export const todoRouter = express.Router()

todoRouter.post("/add-todo", createTodo)
todoRouter.get("/get-all-todos", getAllTodos)