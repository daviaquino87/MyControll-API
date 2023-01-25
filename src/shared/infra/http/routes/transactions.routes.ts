import { Router } from "express";
import { CreateTransactionController } from "../../../../modules/transactions/useCases/createTransaction/CreateTransactionController";
import { ListTransactionController } from "../../../../modules/transactions/useCases/listTransaction/ListTransactionController";

const createTransactionController = new CreateTransactionController();
const listTransactionController = new ListTransactionController();

export const transactionsRoutes = Router();

transactionsRoutes.post("/", createTransactionController.handle);
transactionsRoutes.get("/", listTransactionController.handle);
