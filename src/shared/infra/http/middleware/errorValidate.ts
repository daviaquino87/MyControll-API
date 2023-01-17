import { NextFunction, Request, Response } from "express";
import { AppError } from "@shared/error/AppError";

export async function errorValidate(
  error: Error & AppError,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ error: error.message });
  }
  console.log(error);
  return response.status(500).json({ error: "Internal error server!" });
}
