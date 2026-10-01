import { ErrorRequestHandler } from "express";
import mongoose from "mongoose";
import { AppError } from "../utils/AppError";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    console.error(`[App Error] ${err.message}`);
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
    return;
  }

  if (err instanceof mongoose.Error) {
    console.error(`[Database Error] ${err.message}`);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }

  console.error("[Unknown Error]");
  return res.status(500).json({
    success: false,
    message: "Internal server error",
  });
};
