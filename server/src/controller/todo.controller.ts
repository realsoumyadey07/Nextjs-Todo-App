import { NextFunction, Request, Response } from "express";
import { TodoModel } from "../models/todo.model";

export const createTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { todo } = req.body;
    if (!todo)
      return next(
        res.status(400).json({ success: false, message: "Todo is required!" })
      );
    const response = await TodoModel.create({ todo });
    return next(
      res.status(201).json({
        success: true,
        data: response,
        message: "Todo successfully created!",
      })
    );
  } catch (error: any) {
    console.log("Error while creating todo", error.message);
    return next(
      res.status(500).json({
        success: false,
        message: "Something went wrong!",
      })
    );
  }
};

export const getAllTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await TodoModel.find();
    if (!response)
      return next(
        res
          .status(400)
          .json({ success: false, message: "Something went wrong" })
      );
    return next(
      res.status(200).json({
        success: true,
        data: response,
        message: "Todos fetched successfully!",
      })
    );
  } catch (error: any) {
     return next(res.status(500).json({
          success: false,
          message: error.message
     }))
  }
};
