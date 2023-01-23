import { Router } from "express";
import { userRouter } from "./user.routes";

export const indexRouter = Router();

indexRouter.get("/", (request, response) => {
  return response.json({ info: "hello world" });
});

indexRouter.use("/users", userRouter);
