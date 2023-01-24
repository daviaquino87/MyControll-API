import { Router } from "express";
import { CreateTransactionController } from "../../../../modules/transactions/useCases/createTransaction/CreateTransactionController";

const createTransactionController = new CreateTransactionController();

export const transactionsRoutes = Router();

transactionsRoutes.post("/", createTransactionController.handle);
