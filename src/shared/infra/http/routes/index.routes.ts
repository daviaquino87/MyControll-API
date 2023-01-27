import { Router } from "express";

import { userRouter } from "./user.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { transactionsRoutes } from "./transactions.routes";
import { ensureAuthenticated } from "../middleware/ensureAuthenticate";
import { categoryRoutes } from "./category.routes";
export const indexRouter = Router();

indexRouter.get("/", (request, response) => {
  return response.json({ info: "hello world" });
});

indexRouter.use(authenticateRoutes);
indexRouter.use("/users", userRouter);
indexRouter.use(ensureAuthenticated);
indexRouter.use("/transactions", transactionsRoutes);
indexRouter.use("/categories", categoryRoutes);
