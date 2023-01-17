import { AppError } from "@shared/error/AppError";
import { Router } from "express";

export const indexRouter = Router();

indexRouter.get("/", (request, response) => {
  return response.json({ info: "hello world" });
});
