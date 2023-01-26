import { Router } from "express";
import { CreateTransactionController } from "../../../../modules/transactions/useCases/createTransaction/CreateTransactionController";
import { ListTransactionController } from "../../../../modules/transactions/useCases/listTransaction/ListTransactionController";
import { ListBalanceController } from "../../../../modules/transactions/useCases/listBalance/ListTransactionController";

const createTransactionController = new CreateTransactionController();
const listTransactionController = new ListTransactionController();
const listBalanceController = new ListBalanceController();

export const transactionsRoutes = Router();

transactionsRoutes.post("/", createTransactionController.handle);
transactionsRoutes.get("/", listTransactionController.handle);
transactionsRoutes.get("/balance", listBalanceController.handle);
